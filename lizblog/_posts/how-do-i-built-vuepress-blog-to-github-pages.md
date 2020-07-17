---
date: "2020-07-14"
slug: how-do-i-built-vuepress-blog-to-github-pages
tags:
  - javascript
  - vuepress
title: 如何把 VuePress 部署到 GitHub Pages 上
description: 如何把 VuePress 部署到 GitHub Pages 上
author: Liz Wang
location: Taiwan,Taipei
image: https://lizwang50.github.io/liz-blog-vuepress/images/posts/vue.jpg
postcard_image: https://lizwang50.github.io/liz-blog-vuepress/images/posts/vue.jpg
meta:
  - name: title
    content: 如何把 VuePress 部署到 GitHub Pages 上
  - name: description
    content: create a modern vuepress blog
  - name: keywords
    content: Liz Wang, Vuepress, Vue.js, Vuepress website, vuepress blog, vuepress theme, vuepress blog theme, vue blog, create vuepress blog, blog theme, create a blog
  - name: author
    content: Liz Wang
  - name: language
    content: Tranditional Chinese
featured: true
---

# 如何把 VuePress 部署到 GitHub Pages 上

## 前言

因為 Build 第二次就把第一次的經驗全忘光了，因此乖乖來寫文件。Orz

## 1. 找到你的 `.yml` 檔案

通常路徑在 `.github/workflows` 裡面

![](https://i.imgur.com/KooXjfe.png)

## 2. 研究 `.yml` 的格式

如果你要全部手寫，可以參考下面幾篇文章

- [VuePress 官方文件](https://vuepress.vuejs.org/zh/guide/deploy.html#%E9%83%A8%E7%BD%B2)
- [TravisCI 官方文件](https://docs.travis-ci.com/user/deployment/pages/)
- [[Vue] 將 Vue 專案部署至 Github Pages](https://medium.com/@dean34520/vue%E7%B3%BB%E5%88%97%E6%96%87-%E5%B0%87vue%E6%AA%94%E6%A1%88%E9%83%A8%E7%BD%B2%E8%87%B3github-334951cadede)
- [[奶綠茶大大]深入但不淺出，如何用 github actions 自動發佈 gh-pages](https://medium.com/@milkmidi/%E6%B7%B1%E5%85%A5%E4%BD%86%E4%B8%8D%E6%B7%BA%E5%87%BA-%E5%A6%82%E4%BD%95%E7%94%A8-github-actions-%E8%87%AA%E5%8B%95%E7%99%BC%E4%BD%88-gh-pages-8183464dfe84)

我是參考奶綠茶大大的文章，自己寫過一次。
另外也有用別人的 VuePress Theme ，載下來的時候就有 default 寫好 `.yml`。

### 需要注意的地方有幾個：

`.yml`裡面的：

- `PUBLISH_DIR`: 代表你要部署資料的原路徑。這裡一定要寫對，不然會各種 fail 。
  ![](https://i.imgur.com/VfbbGmi.png)

`package.json`裡面的 `scripts`：

- build 的路徑：要與上面 `.yml` 檔案的目錄名一致。
  ![](https://i.imgur.com/lA2JHkS.png)

## 3. 調整檔案路徑後，直接推上去！

推上去之後，前往你 Repo 的 Actions 檢查一下吧！

![](https://i.imgur.com/kG6yBEB.png)

- 如果出現錯誤，看一下是不是路徑設定還是哪裡有問題，再繼續修改。
- 如果沒有出現錯誤，應該會看到如圖示上一樣的綠色勾勾。

回到 Source Code 頁面，看一下 Branch 上是不是有 gh-pages 了。
![](https://i.imgur.com/q7VPkPa.png)

## 4. 記得去 Repo Settings 把 gh-pages branch 設為你的來源

![](https://i.imgur.com/MfTzxi7.png)

## 5. 最後點開你的 gh-page site 檢查檔案載入是否有問題

### 記得設定 base url

我就忘記設定 base url 這個東東。

![](https://i.imgur.com/71TDRcp.jpg)

記得在你的 config.js 裡面設置正確的 base 。

![](https://i.imgur.com/cZyQz6b.png)

## 6. 噠噠～應該就完成啦 🎉

如果還沒跑出來，記得等他個十分鐘。
結束～
