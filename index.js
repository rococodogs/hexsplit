module.exports = function hexsplit( str ) {
    var i = 0
      , len = str.length
      , out = []
      ;

    if ( /[^a-f0-9]/g.test(str) ) throw Error('String input must be hex-encoded');
    if ( len % 2 ) str += '0';

    for ( ; i < len; i += 2 ) out.push((str[i] + str[i+1]).toString());
    return out;
}