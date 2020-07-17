module.exports = {
  title: "Liz Wang",
  base: "/liz-blog-vuepress/",
  description: "This is liz's blog built by VuePress",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "./liz-icon/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "./liz-icon/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "./liz-icon/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "./liz-icon/site.webmanifest" }],
    ["link", { rel: "shortcut icon", href: "./liz-icon/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#3a0839" }],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "./liz-icon/browserconfig.xml"
      }
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  theme: require.resolve("../../"), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  summaryLength: 50,
  themeConfig: {
    translations: {
      read_more: "繼續閱讀",
      read_this_post: "閱讀這則文章吧!"
    },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    summary: true,
    // Example of advanced summary usage

    summary: {
      // Use the first two paragraphs
      paragraphs: 1,
      summaryLength: 50,
      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",

      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      // paragraphsJoiner: "",
      paragrahpsJoiner: "<br><br>",
      // If we didn't want to use the "paragraphs" functionality, and instead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",

      // How about we add an emoji at the beginning of our summary?
      // prepend: "🔈",

      // ... what about at the end?
      append: "...📖"
    },

    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house"
      },
      {
        text: "Projects",
        link: "/projects/",
        icon: "el-icon-folder"
      }
    ],
    // Let's say that we want to add a small message at the beginning or at the
    // end of each post. This is the place!
    posts: {
      prepend:
        "Hi, 歡迎來到我的 Blog ，如果喜歡我的文章，或是對我有什麼想法，都可以在下面留言給我。"
      // append: "Hi, I hope you've <b>enjoyed</b> this post!"
    },
    disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    about: {
      fullName: "Liz Wang",
      bio:
        "一個新手菜鳥軟體 PM Project/Product Manager 某天按下 F12 之後就開啟神奇的開關。",
      image: "https://lizwang50.github.io/liz-blog-vuepress/images/me.jpg"
    },

    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/lizwang50"
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/liz-wang-6a43a31a5/"
        }
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: "MIT Licensed | Copyright © 2020-present Vue.js",
          link: ""
        }
      ]
    }
  },
  plugins: [
    "crisp",
    "seo",
    "smooth-scroll",
    "reading-progress",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    "social-share",
    "@vuepress/google-analytics",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://vp-modern.z3by.com"
      }
    ]
  ]
};
