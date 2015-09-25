import Image from '../image';
import convolution from '../operator/convolution';

// first release of mean filter
export default function meanFilter(k) {

    this.checkProcessable('meanFilter', {
        components:[1],
        bitDepth:[8,16]
    });

    if (k < 1) {throw new Error('Number of neighbors should be grater than 0');}

    //mean filter do not is in place
    let newImage = Image.createFrom(this, {
        kind: {
            components: 1,
            alpha: this.alpha,
            bitDepth: this.bitDepth,
            colorModel: null
        }
    });

    let n = 2 * k + 1;
    let size = n * n;
    let kernel = new Array(size);

    for (let i = 0; i < kernel.length; i++) {kernel[i] = 1;}
    convolution.call(this, newImage, kernel);

    return newImage;
}