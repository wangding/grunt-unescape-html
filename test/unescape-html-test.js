/* global describe, it: true */
const expect    = require('chai').expect,
      grunt     = require('grunt');

describe('test unescape html', function() {
  it('index.html', function(){
    let actual = grunt.file.read('test/dst/src/index.html');
    let expected = grunt.file.read('test/expected/index.html');

    expect(actual).to.equal(expected);
  });
});
