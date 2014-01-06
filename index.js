/*
 * Copyright 2014 Yahoo! Inc. All rights reserved.
 * Licensed under the BSD License.
 * http://yuilibrary.com/license/
 */

var crypto  = require('crypto'),
    fs      = require('fs');

module.exports = function (source, options, callback) {
    var algorithm   = 'sha1',
        encoding    = 'hex',
        stream,
        hash;

    // optional options object
    if (typeof options === 'function') {
        callback = options;
        options  = null;
    }

    // override defaults when specified
    if (options) {
        algorithm = options.algorithm || algorithm;
        encoding  = options.encoding  || encoding;
    }

    hash = crypto.createHash(algorithm);

    if (Buffer.isBuffer(source)) {
        hash.update(source);
        return callback(null, hash.digest(encoding));
    }

    stream = fs.createReadStream(source);

    stream.on('data', function (data) {
        hash.update(data);
    });

    stream.on('error', function (err) {
        callback(err);
    });

    stream.on('end', function () {
        callback(null, hash.digest(encoding));
    });
};
