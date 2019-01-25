# canvas-steg

Execute and embed JavaScript hidden in steganographic images

## Description

Based on an article by [Confiant](https://blog.confiant.com/confiant-malwarebytes-uncover-steganography-based-ad-payload-that-drops-shlayer-trojan-on-mac-cd31e885c202), this is a proof-of-concept demonstrating how unbelievably easy it is to embed JavaScript in an image and then execute it.

## Installation

```bash
# install dependencies
yarn install

# build library
yarn run build

# encode payload in image
yarn run encode
```

NOTE: Start a server in the root of the repo and navigate to `/demo`

## Usage

```js
// require the library
const CanvasSteg = require('/path/to/canvas-steg.js');

// instantiate
const steg = new CanvasSteg();

// prepare the payload image
steg
    .prepare('./payload.png')
    .then(() => {
        // see the payload text (base64 encoded)
        console.log(steg.text);

        // you may also see the payload code
        console.log(steg.payload);

        // execute the javascript
        steg.execute();
    });
```

## Explanation

`encode.js` creates an image where every pixel contains the data for 1 byte of
the base64-encoded payload. The data is stored in the 2 least-significant bits
of the red, green, blue, and alpha channels of each pixel.

Consider the steps for encoding `0x56` into a white pixel (where all channels,
including alpha, are `0xFF`)

1) XOR `0x56` with `0xFF` to flip all bits (Now: `0xA9` or `0b10101001`)
2) Place bits 0-1 in the 2 least-significant bits of the red channel
(`0x01` -> `0xFF` = `0xFF`)
3) Place bits 2-3 in the 2 least-significant bits of the green channel
(`0x02` -> `0xFF` = `0xFE`)
4) Place bits 4-5 in the 2 least-significant bits of the blue channel
(`0x02` -> `0xFF` = `0xFE`)
5) Place bits 6-7 in the 2 least-significant bits of the alpha channel
(`0x02` -> `0xFF` = `0xFE`)

Notice very little information has changed in the pixel by only changing the 2
least-significant bits. This makes any image tampering difficult to identify
with the naked eye:

* Red: `0xFF` -> `0xFF`
* Green: `0xFF` -> `0xFE`
* Blue: `0xFF` -> `0xFE`
* Alpha: `0xFF` -> `0xFE`

NOTE: To decode the data, the opposite bitwise actions are taken and the result
is base64 decoded.

The data is decoded by copying the steganographic image to an HTML Canvas
element and grabbing the pixel data to be decoded.

To execute the JavaScript payload, the result is passed to the [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
constructor and executed:

```js
// just as evil as eval()
const func = new Function('<js payload>');

func();
```
