
const hybirdObj = {};
const isAppExec = /test1|test2/i;

if (process.env.REACT_ENV === 'client') {
    Object.assign(hybirdObj, {
        isApp: isAppExec.test(window.navigator.userAgent),
        isAndroid: /android/i.test(window.navigator.userAgent),
        isIOS: /ios/i.test(window.navigator.userAgent),
        isWeixin: window.navigator.userAgent.toLowerCase().match(/micromessenger/i),
        isWeChat: window.navigator.userAgent.toLowerCase().match(/micromessenger/i),
    });
}

export default hybirdObj;
