/* eslint-disable import/no-mutable-exports */
let nativeApi = {};

if (process.env.REACT_ENV === 'client') {
    nativeApi = require('native-api');
}

export default nativeApi;
