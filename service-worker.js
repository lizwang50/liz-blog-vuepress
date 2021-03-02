/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/06/29/how-to-leave-work-on-time/index.html",
    "revision": "66ecfe07bafcd11310d54d4320406065"
  },
  {
    "url": "2020/02/01/pms-communication-methods/index.html",
    "revision": "7fe38fd04769064d0099edf5bcfebe0c"
  },
  {
    "url": "2020/05/20/how-to-create-an-issue/index.html",
    "revision": "c8a8e124b13a93665abbb789fd3fd71c"
  },
  {
    "url": "2020/07/14/how-do-i-built-vuepress-blog-to-github-pages/index.html",
    "revision": "7224bd14efcd34127a2932ac6f25f643"
  },
  {
    "url": "404.html",
    "revision": "68a6afab9e6ee421b63d71f974f27c9e"
  },
  {
    "url": "assets/css/0.styles.4f6ea20d.css",
    "revision": "50f78d70a139430643189db6e777c097"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/js/10.b79a8614.js",
    "revision": "e79661bb14c0fe8662197b6b2cd0b5fd"
  },
  {
    "url": "assets/js/11.0535c84d.js",
    "revision": "1493abd330cb23e0a274e55e7a977c51"
  },
  {
    "url": "assets/js/12.dea73428.js",
    "revision": "1e1290b8d80479c21ec827b7f140bc45"
  },
  {
    "url": "assets/js/13.a82dc2aa.js",
    "revision": "572779e59479fcce2e05a707ad722c54"
  },
  {
    "url": "assets/js/14.990283b1.js",
    "revision": "873e6bccc6ecacfbc923c8676f15ede8"
  },
  {
    "url": "assets/js/15.ea228f44.js",
    "revision": "18a483f86ccba3b4bb3a513dd19aaf4c"
  },
  {
    "url": "assets/js/16.0ebebd5c.js",
    "revision": "2aada22180ad18e3c1e7d760eb576637"
  },
  {
    "url": "assets/js/17.3de1733f.js",
    "revision": "cef8e9f42ca67047c1cf9b069e8224ed"
  },
  {
    "url": "assets/js/18.2b233ee0.js",
    "revision": "5ccaa2f418853cdcf557109ebc6cc5d5"
  },
  {
    "url": "assets/js/19.3191fc97.js",
    "revision": "bfd0f10c3b7fdd2540b231bd4336897f"
  },
  {
    "url": "assets/js/20.68b449e3.js",
    "revision": "0023cde359e3aa14a096447d63dc960d"
  },
  {
    "url": "assets/js/21.1de76760.js",
    "revision": "17312b35241b1cc72fe5fe1c3bd559e5"
  },
  {
    "url": "assets/js/22.bc98b501.js",
    "revision": "a11303f141ac99c31aa53adfc71168f0"
  },
  {
    "url": "assets/js/23.150b6f44.js",
    "revision": "4219bdd293d73b129300d938e1211207"
  },
  {
    "url": "assets/js/24.51483b00.js",
    "revision": "293e53a0867016a2638e5eac6241c07d"
  },
  {
    "url": "assets/js/25.5e7e6b7b.js",
    "revision": "da357e9a3f53255fda913fee5e7d89c1"
  },
  {
    "url": "assets/js/26.40575e05.js",
    "revision": "56f599c0353506e2f6d047bc5e8e08cb"
  },
  {
    "url": "assets/js/27.af4e085f.js",
    "revision": "261d9a069e11e1a4af9ba4c2641f3cc4"
  },
  {
    "url": "assets/js/28.82aaa735.js",
    "revision": "dae2d67d9fd786b9377072c953dc67fb"
  },
  {
    "url": "assets/js/3.132280a2.js",
    "revision": "8f0d833f1da1fe39b8d10d3f54fe2ae4"
  },
  {
    "url": "assets/js/4.834bd93f.js",
    "revision": "da4c1f4213732a5a24589093c420062d"
  },
  {
    "url": "assets/js/5.4638a30a.js",
    "revision": "bf5ae5a954fb878572dcd9ffbefd9089"
  },
  {
    "url": "assets/js/6.35a60b9f.js",
    "revision": "f7bd2f6fcdf4ac4271398fbfe7eb18bc"
  },
  {
    "url": "assets/js/7.f13df80f.js",
    "revision": "9be129f9e166ed99f6339eab20c15531"
  },
  {
    "url": "assets/js/8.b1aa2f7c.js",
    "revision": "442066a82fc969a0b6e956377fb4b2b9"
  },
  {
    "url": "assets/js/9.94ca3641.js",
    "revision": "128e76cf99c901df6a48674d13bc99d8"
  },
  {
    "url": "assets/js/app.8877257f.js",
    "revision": "c047d306ebf5c58e93892c4abf892041"
  },
  {
    "url": "assets/js/vuejs-paginate.92bddf12.js",
    "revision": "912db4c6c9054bdd73af8cdddcd77caa"
  },
  {
    "url": "images/bg_2.jpg",
    "revision": "08badfc5eeb413a8908aaa7d23543b48"
  },
  {
    "url": "images/Liz-icon.png",
    "revision": "ed14fd6f94eb42e615777d404e05f6f3"
  },
  {
    "url": "images/me.jpg",
    "revision": "5b2c05a989bd9563b8acbf3b74dd89cb"
  },
  {
    "url": "images/posts/github-create-issue.jpeg",
    "revision": "a768665e7d3179245adb315afa0a87c2"
  },
  {
    "url": "images/posts/github-create-template.jpeg",
    "revision": "a9335168b2aadaa394b38945ffb66f8f"
  },
  {
    "url": "images/posts/gitlab-create-template.jpeg",
    "revision": "9a1110ef254301994fb902089159aa30"
  },
  {
    "url": "images/posts/how-to-leave-work-on-time.jpeg",
    "revision": "43a5b9e8ba9a0b19b218995c9ae0cf26"
  },
  {
    "url": "images/posts/sample-wireframe.png",
    "revision": "29a00ea7ef5f7860bc71ba1ce965bbf7"
  },
  {
    "url": "images/posts/vue.jpg",
    "revision": "786223ce982bb0162747c79b6be0638f"
  },
  {
    "url": "images/projects/30dayChallengeWireframe.png",
    "revision": "0bb96f7aa9af195d84a04e9f958e0e57"
  },
  {
    "url": "images/projects/30daysChallenge.png",
    "revision": "4e967160e2a0abea41ff24885858171c"
  },
  {
    "url": "images/projects/chiaochiao.png",
    "revision": "dcb125924daf50c0a67d4852d468b938"
  },
  {
    "url": "index.html",
    "revision": "29d15c518c6d2bf76b9ef1b6cd960145"
  },
  {
    "url": "liz-icon/android-chrome-192x192.png",
    "revision": "e777053fd4bc595c5111e2f7e6a1a714"
  },
  {
    "url": "liz-icon/android-chrome-512x512.png",
    "revision": "f303e273341e81e97503c8a508d2e93d"
  },
  {
    "url": "liz-icon/apple-touch-icon.png",
    "revision": "1761e679644a8187935dd7755a83dbc2"
  },
  {
    "url": "liz-icon/favicon-16x16.png",
    "revision": "0aa905418191fa4ef9040ebd81bf40ff"
  },
  {
    "url": "liz-icon/favicon-32x32.png",
    "revision": "fb50b6e23a46707d8b1058f10fae4342"
  },
  {
    "url": "liz-icon/head.html",
    "revision": "a754a9bf47a3dee124eebfe95a7df95e"
  },
  {
    "url": "liz-icon/mstile-150x150.png",
    "revision": "32f2170a14b5c2e329a3217c8f48aa7c"
  },
  {
    "url": "projects/_1-kabushiki/index.html",
    "revision": "f003e1e28535b20baf861afaa5250f4c"
  },
  {
    "url": "projects/_2-st-ec-site/index.html",
    "revision": "17cb20b8a667a3d6ab5e250baf6de9b1"
  },
  {
    "url": "projects/_3-fudousan/index.html",
    "revision": "a371e63a1e8c937e78afb12335e47caa"
  },
  {
    "url": "projects/_4-30-day-vanilla-js-coding-challenge/index.html",
    "revision": "def34382aa00e74e0eb361b349188809"
  },
  {
    "url": "projects/_5-chiaochiaokuoillustration/index.html",
    "revision": "8368d51b25c40be83d0603a3c12be1c9"
  },
  {
    "url": "projects/_6-js-underground/index.html",
    "revision": "934810576d9c4e100476192dfccef2c6"
  },
  {
    "url": "projects/index.html",
    "revision": "321deb506a06c54f074f034f66e98f32"
  },
  {
    "url": "projects/page/2/index.html",
    "revision": "4c0915fa31abc2105a207c37b76a23b2"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "94b8654005459866ab380f3a15da3fd0"
  },
  {
    "url": "tag/index.html",
    "revision": "bde160f298e8656196f1c2c93f31f576"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "d6791b1eea63ddd2f838a38356912f29"
  },
  {
    "url": "tag/PM/index.html",
    "revision": "557eaf66fe4f1061cc1a1c6c6738774f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ea5098bf4bc6bd85e34cf8b78e09cf93"
  },
  {
    "url": "tag/工作心法/index.html",
    "revision": "ed924980b856d61d61d60f9287f1ce1d"
  },
  {
    "url": "tag/技術文章/index.html",
    "revision": "e9632049e18d0fd49a97fd3cb997ecc2"
  },
  {
    "url": "tag/新手軟體 PM 系列/index.html",
    "revision": "3f1449baf9d7405123e5f61d923a06e7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
