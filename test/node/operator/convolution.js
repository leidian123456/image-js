import {Image, getHash} from '../common';

describe('check the convolution operator', function () {
    it('check the convolution for GREY image', function () {
        let image = new Image(4, 4,
            [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            ],
            {kind: 'GREY'}
        );

        Array.from(image.convolution([1]).data).should.eql(
            [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            ]
        );

        Array.from(image.convolution([[1]]).data).should.eql(
            [
                1, 2, 3, 4,
                5, 6, 7, 8,
                9, 10, 11, 12,
                13, 14, 15, 16
            ]
        );


        (function () {
            image.convolution([1,2,3]);
        }).should.throw(/array should be a square/);

        (function () {
            image.convolution([[1],[1,2,3]]);
        }).should.throw(/rows and columns should be odd number/);
    });


    it('check the convolution for GREY image', function () {
        let image = new Image(4, 4,
            [
                1, 1, 1, 1,
                1, 2, 2, 1,
                1, 2, 2, 1,
                1, 1, 1, 1
            ],
            {kind: 'GREY'}
        );

        Array.from(image.convolution([1, 1, 1, 1, 1, 1, 1, 1, 1]).data).should.eql(
            [
                13, 13, 13, 13,
                13, 13, 13, 13,
                13, 13, 13, 13,
                13, 13, 13, 13
            ]
        );

    });

    it('check the convolution non square for GREY image', function () {
        let image = new Image(4, 4,
            [
                1, 1, 1, 1,
                1, 2, 2, 1,
                1, 2, 2, 1,
                1, 1, 1, 1
            ],
            {kind: 'GREY'}
        );

        Array.from(image.convolution([[1, 2, 1]]).data).should.eql(
            [
                4, 4, 4, 4,
                7, 7, 7, 7,
                7, 7, 7, 7,
                4, 4, 4, 4
            ]
        );

    });
});

