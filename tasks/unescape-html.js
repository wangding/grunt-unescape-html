let decoder = require('ncr-decode').ncrDecode,
    path    = require('path');

function roundfractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

module.exports = function (grunt) {
  grunt.registerMultiTask('unescape', 'unescape html', function () {
    let count = 0, srcLen = 0, dstLen = 0;

    this.files.forEach(function (f) {
      f.src.forEach(item => {
        if (!grunt.file.exists(item)) {
          grunt.log.warn('Source file "' + item + '" not found.');
          return false;
        }

        let content = grunt.file.read(item, 'utf8');
        srcLen += Buffer.byteLength(content);

        content = decoder(content);
        dstLen += Buffer.byteLength(content);

        let dst = item.split('/');
        dst.shift();
        dst = path.join(f.dist, dst.join('/'));
        grunt.file.write(dst, content);
        count++;
      });
    });

    srcLen = roundfractional(srcLen/1024, 2);
    dstLen = roundfractional(dstLen/1024, 2);

    grunt.log.ok(count + ' file created ' + srcLen + ' kB -> ' + dstLen + ' kB');
  });
};
