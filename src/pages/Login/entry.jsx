
// import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import 'common/less/base.less';
import Login from './index';

hydrate(<Login></Login>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
