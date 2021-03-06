import chunkMessage from '../../src/encode/chunk-message'

describe('encode', () => {
  describe('chunkMessage', () => {
    // chunks the utf-16 (2 byte) characters to UInt8 array; so every character takes 2 places
    it('should return correct chunks', () => {
      // ascii range
      expect(chunkMessage('foo')).toEqual([0, 102, 0, 111, 0, 111]);
      expect(chunkMessage('bar')).toEqual([0, 98, 0, 97, 0, 114]);
      // some utf-16 char
      expect(chunkMessage('‒–—―‖‗‘’‚‛“”„‟†‡•‣․‥…‰‱′″‴‵‶‷‸‹›※‼‽‾‿⁀⁁⁂⁃⁄⁅⁆⁇⁈⁉⁊⁋⁌⁍⁎⁏⁐⁑⁒⁓⁔⁕⁖⁗⁘⁙⁚⁛⁜⁝'))
        .toEqual([32,18,32,19,32,20,32,21,32,22,32,23,32,24,32,25,32,26,32,27,32,28,32,29,32,30,32,31,32,32,32,33,32,34,32,35,32,36,32,37,32,38,32,48,32,49,32,50,32,51,32,52,32,53,32,54,32,55,32,56,32,57,32,58,32,59,32,60,32,61,32,62,32,63,32,64,32,65,32,66,32,67,32,68,32,69,32,70,32,71,32,72,32,73,32,74,32,75,32,76,32,77,32,78,32,79,32,80,32,81,32,82,32,83,32,84,32,85,32,86,32,87,32,88,32,89,32,90,32,91,32,92,32,93]);
    })
  })
})
