﻿require('../../../src/common/iServer/BufferDistance');

describe('BufferDistance', function () {
    it('constructor_default', function () {
        var bufferDistance = new SuperMap.BufferDistance();
        expect(bufferDistance).not.toBeNull();
        expect(bufferDistance.value).toEqual(100);
        expect(bufferDistance.exp).toBeNull();
        bufferDistance.destroy();
        expect(bufferDistance.value).toBeNull();
        expect(bufferDistance.exp).toBeNull();
    });
    it('constructor_value', function () {
        var bufferDistance = new SuperMap.BufferDistance({
            value: 200
        });
        expect(bufferDistance).not.toBeNull();
        expect(bufferDistance.value).toEqual(200);
        expect(bufferDistance.exp).toBeNull();
        bufferDistance.destroy();
        expect(bufferDistance.value).toBeNull();
        expect(bufferDistance.exp).toBeNull();
    });
});





