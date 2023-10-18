// (function() {
//     var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
//     var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.96f443a48ca6b22395c7.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/253.latest.en.82c5ac78f08081464f8e.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/492.latest.en.7e74adcddb3c2fc17c36.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.577af057fc09a0f8a957.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.3217f33c01ccada9e36c.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.en.13d4de92b88330e8fea9.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.latest.en.ea0f5e2f0c452b946865.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.en.7fcd45ae446a9a5574e8.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.en.4e48a5305471696baedf.js"];
//     var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/253.latest.en.b6b30b91ce16ecbf82fb.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e35d1843625af57f724b.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.latest.en.de632f46eb4458a002a4.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.en.114694af19bbc954f6f4.css"];
//     var fontPreconnectUrls = [];
//     var fontPrefetchUrls = [];
//     var imgPrefetchUrls = [];

//     function preconnect(url, callback) {
//         var link = document.createElement('link');
//         link.rel = 'dns-prefetch preconnect';
//         link.href = url;
//         link.crossOrigin = '';
//         link.onload = link.onerror = callback;
//         document.head.appendChild(link);
//     }

//     function preconnectAssets() {
//         var resources = [baseURL].concat(fontPreconnectUrls);
//         var index = 0;
//         (function next() {
//             var res = resources[index++];
//             if (res) preconnect(res[0], next);
//         })();
//     }

//     function prefetch(url, as, callback) {
//         var link = document.createElement('link');
//         if (link.relList.supports('prefetch')) {
//             link.rel = 'prefetch';
//             link.fetchPriority = 'low';
//             link.as = as;
//             if (as === 'font') link.type = 'font/woff2';
//             link.href = url;
//             link.crossOrigin = '';
//             link.onload = link.onerror = callback;
//             document.head.appendChild(link);
//         } else {
//             var xhr = new XMLHttpRequest();
//             xhr.open('GET', url, true);
//             xhr.onloadend = callback;
//             xhr.send();
//         }
//     }

//     function prefetchAssets() {
//         var resources = [].concat(
//             scripts.map(function(url) {
//                 return [url, 'script'];
//             }),
//             styles.map(function(url) {
//                 return [url, 'style'];
//             }),
//             fontPrefetchUrls.map(function(url) {
//                 return [url, 'font'];
//             }),
//             imgPrefetchUrls.map(function(url) {
//                 return [url, 'image'];
//             })
//         );
//         var index = 0;
//         (function next() {
//             var res = resources[index++];
//             if (res) prefetch(res[0], res[1], next);
//         })();
//     }

//     function onLoaded() {
//         preconnectAssets();
//         prefetchAssets();
//     }

//     if (document.readyState === 'complete') {
//         onLoaded();
//     } else {
//         addEventListener('load', onLoaded);
//     }
// })();