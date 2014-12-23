var tape = require('tape')
  , hexsplit = require('./')
  ;

tape('pads string w/ 0 if not even number of characters', function(t) {
    t.plan(2);

    t.deepEqual(hexsplit('a2c'), ['a2', 'c0']);
    t.deepEqual(hexsplit('a2c3'), ['a2', 'c3']);
});

tape('only uses hex strings', function(t) {
    t.plan(2);

    t.throws(function() { hexsplit('a2cz'); });
    t.doesNotThrow(function() { hexsplit('a2c3'); });
})