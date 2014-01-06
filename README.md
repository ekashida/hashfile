# hashfile

Calculates the hash of a file.


# example

```
var hashfile = require('hashfile');

hashfile('/kamen/rider', function (err, hash) {
    if (err) {
        console.error(err);
    }
    console.log('hash of file', hash);
});
```


# methods

```
var hashfile = require('hashfile');
```

## hashfile(filepath, [options], callback)

Gets the hash of the content of a file specified by the `filepath` string. `filepath` can also be a `Buffer`.

The default hash algorithm is `sha1` but can be overridden via `options.algorithm`.

The default hash encoding is `hex` but can be overriden via `options.encoding`.


# install

```
npm install hashfile
```


# license

BSD
