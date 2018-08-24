
let apiHost = 'xxx.dev.com';
let apiServerHost = 'yyy.dev.com';


if (process.env.CODE_ENV === 'qa') {
    apiHost = 'xxx.qa.com';
    apiServerHost = 'yyy.qa.com';

} else if (process.env.CODE_ENV === 'online') {
    apiHost = 'xxx.online.com';
    apiServerHost = 'yyy.online.com';

}

export default {
    apiHost,
    apiServerHost,
};
