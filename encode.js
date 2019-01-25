const fs = require('fs');
const {PNG} = require('pngjs');
const UglifyJS = require('uglify-js');

if (process.argv.length < 3) {
    process.stdout.write(`Usage: node encode.js <input.js> <output.png>\n`);
    process.exit(1);
}

const [_, __, input_js_filename, output_png_filename] = process.argv;

const input_js = fs.readFileSync(input_js_filename).toString();
const result = UglifyJS.minify(input_js, {
    mangle: {
        toplevel: true
    }
});

if (result.error) {
    console.log(result.error);
    process.exit(1);
}

const input_text = Buffer.from(result.code).toString('base64');

const width = Math.ceil(Math.sqrt(input_text.length));

if (width === 0) {
    process.stdout.write(`Error: payload is too small (${input_text.length})\n`);
    process.exit(1);
}

const png = new PNG({
    width: width,
    height: width,
    colorType: 6,
    bgColor: {
        red: 255,
        green: 255,
        blue: 255
    }
});

const data = Buffer.from((
    [...new Array(width * width * 4)]
        .map(() => {
            return 0xFF;
        })
));

input_text
    .split('')
    .forEach((chr, i) => {
        const code = chr.charCodeAt(0) ^ 0xFF;

        data[(i * 4) + 0] = (data[(i * 4) + 0] & 0xFC) | (code & 0x03);
        data[(i * 4) + 1] = (data[(i * 4) + 1] & 0xFC) | ((code >> 2) & 0x03);
        data[(i * 4) + 2] = (data[(i * 4) + 2] & 0xFC) | ((code >> 4) & 0x03);
        data[(i * 4) + 3] = (data[(i * 4) + 3] & 0xFC) | ((code >> 6) & 0x03);
    });

data.copy(png.data);

png
    .pack()
    .pipe(fs.createWriteStream(output_png_filename));
