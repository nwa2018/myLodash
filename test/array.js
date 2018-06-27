const assert = require('assert')
const expect = require('expect.js')
const L = require('../dist/lodash.js')

describe('myLodash Array func', _ => {
  describe('L.slice', _ => {
    it('L.slice([1,2,3], 1) should return [2,3]', done => {
      expect(L.slice([1,2,3], 1)).to.eql([2,3])
      done()
    })
    it('L.slice([1,2,3], 1, 2) should return [2]', done => {
      expect(L.slice([1,2,3], 1, 2)).to.eql([2])
      done()
    })
  })

  describe('L.chunk', _ => {
    it('L.chunk([1,2,3], 1) should return [[1],[2],[3]]', done => {
      expect(L.chunk([1,2,3], 1)).to.eql([[1],[2],[3]])
      done()
    })
    it('L.chunk([1,2,3], 2) should return [[1,2],[3]]', done => {
      expect(L.chunk([1,2,3], 2)).to.eql([[1,2],[3]])
      done()
    })
  })
})
