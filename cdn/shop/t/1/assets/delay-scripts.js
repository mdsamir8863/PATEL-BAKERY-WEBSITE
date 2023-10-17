/** Shopify CDN: Minification failed

Line 9:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 10:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 11:0 Transforming const to the configured target environment ("es5") is not supported yet

**/
// Ref: https://blog.speedvitals.com/delay-javascript/#Add_JS_Delay_Code
const autoLoadDuration = 5; //In Seconds
const eventList = ['keydown', 'mousemove', 'wheel', 'touchmove', 'touchstart', 'touchend'];
const autoLoadTimeout = setTimeout(runScripts, autoLoadDuration * 1000);

eventList.forEach(function(event) {
    window.addEventListener(event, triggerScripts, {
        passive: true
    })
});

function triggerScripts() {
    runScripts();
    clearTimeout(autoLoadTimeout);
    eventList.forEach(function(event) {
        window.removeEventListener(event, triggerScripts, {
            passive: true
        });
    });
}

function runScripts() {
    document.querySelectorAll('script[delay]').forEach(function(scriptTag) {
        scriptTag.setAttribute('src', scriptTag.getAttribute('delay'));
    });
}