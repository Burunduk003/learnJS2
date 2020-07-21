'use strict';

const p = document.querySelectorAll('p');

console.log(p);

// const script = document.createElement('script');
// script.src = 'Script/test.js';
// script.async = false;
// document.body.append(script);

function loadScript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('Script/test.js');
loadScript('Script/some.js');