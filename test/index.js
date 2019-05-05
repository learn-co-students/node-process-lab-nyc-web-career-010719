var expect = require('chai').expect
var fs = require('fs')
var path = require('path')
var expectedNodeVersion = process.version
var expectedPlatform = ['darwin', 'linux']
var expectedEnv = process.env.NODE_ENV

describe('node', function () {
  it('must have version ' + expectedNodeVersion, function(done){
    var actualNodeVersion = require(path.join(__dirname, '../version'))
    expect(actualNodeVersion).to.be.equal(expectedNodeVersion)
    // console.log('Actual Node Version:',actualNodeVersion)
    // console.log('Expected Node Version:',expectedNodeVersion)

    done()
  })
})

describe('platform', function () {
  it('must be ' + expectedPlatform, function(done){
    var actualPlatform = require(path.join(__dirname, '../platform'))
    expect(actualPlatform).to.be.oneOf(expectedPlatform)
    done()
  })
})


describe('env var NODE_ENV', function () {
  it('must be ' + expectedEnv, function(done){
    var actualEnv = require(path.join(__dirname, '../envvar'))
    expect(actualEnv).to.equal(expectedEnv)
    done()
  })
})
