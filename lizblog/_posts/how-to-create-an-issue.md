---
date: "2020-05-20"
slug: how-to-create-an-issue
tags:
  - blog
  - 工作心法
  - 新手軟體 PM 系列
title: 新手軟體 PM 跟 Issue 的愛恨情仇
description: 新手軟體 PM 跟 Issue 的愛恨情仇
author: Liz Wang
location: Taiwan,Taipei
image: https://lizwang50.github.io/liz-blog-vuepress/images/posts/how-to-leave-work-on-time.jpeg
postcard_image: https://lizwang50.github.io/liz-blog-vuepress/images/posts/how-to-leave-work-on-time.jpeg
meta:
  - name: title
    content: 新手軟體 PM 跟 Issue 的愛恨情仇
  - name: description
    content: how to create an issue
  - name: keywords
    content: Liz Wang, work, issue, efficiency
  - name: author
    content: Liz Wang
  - name: language
    content: Tranditional Chinese
featured: true
---

---

本文為【新手軟體 PM】系列文

## 前言：

本人是個中文系畢業的大外行，可以說是完全沒有任何資訊背景。以前做過行銷產業的 PM ，但是 2019 年來到五倍紅寶石之後，才第一次踏入網頁軟體相關的領域。

在這裡想要和希望進入或準備進入軟體業界(網頁 or App 相關領域)的新手 PM 分享一些心得。請各位大大鞭小力一點 QQ

## 本文開始 ✌🏻

在進來五倍之前，我就知道 [GitHub](https://zh.wikipedia.org/zh-tw/GitHub) 以及 [GitLab](https://zh.wikipedia.org/wiki/GitLab) 兩大透過 Git 進行版本控制的軟體原始碼代管服務平台。這兩個平台最主要的核心概念是版本控制。

因為講 Git 或是版本控制應該會歪樓，所以我只好先假設大家都會基本的 Git 以及基本的版本控制概念 (ˊ\_>ˋ)。

（業配一波：如果你毫無概念，可以參考五倍大大ー龍哥的[《為你自己學 Git》](https://gitbook.tw/)）

PM 剛進軟體公司，一定要會使用 GitHub / GitLab ，兩者其實大同小異，我個人比較喜歡 GitHub 的介面 XD （雖然現在專案用 GitLab）。

PM 一定要會開 Issue、使用 Boards、Milestone 追蹤 Issue 狀況以及管理專案等等。我這邊想要先就 Issue 上的管理，來跟大家分享一下。

## 到底什麼叫做「會開 Issue」 ？

老實說，我到現在還是沒有正確答案。XD
但是有摸出一點點頭緒。

### 1. Issue title 要具體。

什麼是具體？簡單來說，最好要有動詞和受詞（還有位置）。
什麼樣的動詞？下述這些文字就是動詞。

> 新增、刪除、編輯、修改、調整、追加、下載、上傳、改變、開發、安裝

一開始，我習慣以使用者的角度，也就是 End User 的角度去寫 Issue。例如一個頁面開一個 Issue 。殊不知，對工程師來說，一個 Issue 應該是「一個功能」或是「一個改動」。通常一個畫面裡面有多個功能要實作 🤔

- 我想像中的 Issue Title ：一覽畫面
- 比較理想的 Issue Title：在一覽畫面新增商品 Modal 以及 Form

你可能會覺得「欸，那不是會開一大堆的 Issue 出來嗎？」

對，沒錯，就是要拆分成超細超小的 Issue 讓功能的實作落實，就算只是改一個字也要開 Issue ！

因此收到設計稿的時候，PM 第一時間就要在心裡開始拆票了。
(註：Issue 在業界有個約定俗成的說法叫做「票」，像是拆票、推票、幾張票、關票、開票等等)

拆票就是將大的 Issue 拆成小的 Issue ，每一個 Issue 就是工程師該做的 Tasks ，並且在進入開發之後， Assign 給負責的工程師進行開發。

### 2. Issue 的內文到底該寫些什麼？

我個人針對 Current Issue 大概會寫下面這幾個項目。

- UI（設計稿）：不是每張票都有 UI ，因此為選填。
- Screenshot（截圖）：同上，如果是有 UI 的情況，可以把截圖附上。
- Content/Criteria（內容或規格）：必填。但是偶爾還在討論中，就要隨時更新，更新完也要記得跟工程師說明。
- Related Issues（關聯 Issues）：選填。
- References（提及或討論的地方）：選填。但建議把曾經討論過的記錄都補上會比較好追溯需求的起源。

我自己很喜歡做 Issue Template ，GitHub 有視覺化的介面可以新增 Template ，但 GitLab 好像就沒有 🤔。
![GitHub Issue Template Editor](https://lizwang50.github.io/liz-blog-vuepress/images/posts/github-create-template.jpeg)
![GitHub Create New Issues](https://lizwang50.github.io/liz-blog-vuepress/images/posts/github-create-issue.jpeg)
![GitLab Issue Template](https://lizwang50.github.io/liz-blog-vuepress/images/posts/gitlab-create-template.jpeg)

兩者都可以在專案中的根目錄新增 `.md`檔案做出 Issue Template ，這個 Template 專案成員都可以使用。像 GitLab 就是在根目錄新增（ .gitlab/issue_templates），然後把 Template 檔案放進去，就可以直接使用囉！

### 3. Bug Report Issue 要怎麼寫？

有時候客戶會直接跟你說 OO 功能壞了、XX 畫面破版，但是除此之外，沒了。-.-

❓PC 版壞了還是 Mobile 版壞了？還是兩個都壞了？不知道。

❓ 有沒有畫面截圖？不知道。

❓ 是如何操作？怎麼壞的？不知道。

基本上，在客戶沒有概念的情況下，就得靠 PM 想辦法先排除各種可能性，並且向客戶要到上述的資料，最後確認是個 Bug ，再回報給工程師知道。

#### 判斷是否為「假議題」

首先，你要做的，就是先確認是不是真的 Bug …

| _不是問題的問題_

嗯對，有時候那說穿了，只是一些雞毛蒜皮、或是根本不是問題的問題，只要重開機、重新啟動 App 等等，就可以排除。這就很簡單，只是會佔用你的一點時間罷了。只要拾起笑容，服務客戶就對了！😇

| _不像話的問題_

假設 UI 有包含 RWD 的情況，就會有所謂的破版情況發生。但 RWD 有一個很大的前提，就是你們簽約時，有沒有說好相容的寬度有哪些？大方向像是手機版、平板、電腦版等，沒有說好的話就尷尬了…

以前遇過客戶覺得為什麼他的螢幕看都破版？他希望某個地方不要斷行等等。

但沒有人有辦法兼容所有的螢幕…

這世界上太多螢幕、各種寬度，所以你只能希望當初簽約的人，有規範到這一個項目，剩下就是兩手一攤，和客戶說明，兼容所有的螢幕可能不太合理。

#### 真正的 Bug 是？

再來是真的 Bug 囉！

假設真的好像是個 Bug 之後，需要確認的東西有兩個：

| _第一，是否能在不同的 Devise 上重現這個 Bug 。_

若只是在某個 Devise 或是某個 Browser 才會出現的問題，就可以考慮說，解決它的成本高不高？要不要花時間去解決它？（當然這邊就需要請團隊、客戶、以及工程師加入討論和評估）

| _第二，有沒有重現 Bug 的操作順序。_

Bug 不可能憑空冒出來，一定是客戶或是 End User 做了什麼才導致的。
最理想的狀況是有操作重現 Bug 的影片，沒有的話最低限度也應該要有多張圖片截圖來表達操作順序。

最困難的就是 Bug 回報來自於根本沒看過、也無法聯繫上的 End User 。只能硬著頭皮請客戶去跟 End User 要截圖或是 Bug 重現的順序敘述。不然真的是只能通靈了（抹臉）

等所有情況都確認、並且盡可能刪除可能的原因後還是無法解決，才能真的開票出來、安排時程，請工程師 debug 。

#### Bug Report 要怎麼寫？

Bug Report Issue 我大概會寫下面這幾個項目。

- Bug 的描述
- Bug 的重現方法：需描述操作順序。最好包含一張以上的截圖，或是操作影片。
- 手機版：手機型號、Android/iOS、系統版本、使用的瀏覽器 etc.
  （補充：In-app-browser 是一個很深的坑，而且可能無法解決在這上面發生的問題，祝福大家都不要遇到…）
- 電腦版：Windows/Mac OS 、使用的瀏覽器 etc.

## 大 Feature 的 Issues  該怎麼開？

什麼是大 Feature ？就是開發時間會超過一個月兩個月的那種。假設現在要開始開發一個大的 Feature ，突然要開一堆票，到底要從哪裡起手呢？🤔

大的 Feature 通常包含了 UI 的調整、後端資料庫的改動、向下相容版本的問題、是否影響原本功能的測試以及串接外部 Api 服務等等。

既然我們在新手村，就先從只要肯花點腦子、有長眼睛就可以理解的 UI 來著手吧！

假設現在有個 Wireframe 長這樣。

![Sample Wireframe](https://lizwang50.github.io/liz-blog-vuepress/images/posts/sample-wireframe.png)

你會有一個 Nav-bar ，Nav-bar 裡面有搜尋欄位、幾個 Nav-items 、Shopping cart 和 Avatar 。

下面則有標題、Bread crumb，以圖片文字按鈕組成的商品牆，旁邊有側邊欄位分類項目，最下面還有 Pagination。

我們票分完了。基本上，前端就是以功能、區塊為單位拆分 Issue 。再加以描述你希望每一個區塊有哪些內容、Link 點擊後會跑到哪裡出現什麼、功能的具體表現有哪些。

---

## 後端該怎麼開票呢？

那後端呢？
很多時候，前後端是無法單獨作業的 R ˊ\_>ˋ？

沒錯，你說對惹。

資料庫要存取資料之後，前端其他地方才有資料可以撈，並且呈現在使用者面前。

資料庫是一個很難的東東，但是專案沒有他不行。（扶額）

像是會員資料、訂單資料、庫存資料等等，都需要存在資料庫裡面。

這邊的 Issue 要怎麼開呢？其實我也還在學習 Orz

### 需要知道的基本知識：ERD

大致上，你需要了解每一張表(也就是 Tables) 之間的關聯，最好有一張 ERD 視覺化的圖片可以對照。真的不了解、也對後端毫無頭緒的情況下，請和你的工程師討論，怎樣寫票對方才能夠很清楚的理解，你想要表達的東西，或是彼此對需求以及規格的期待。

### 串接服務：APIs

再來還有串接服務。

像是金流物流，很多都要串接其他的服務或是 Api 等等。這種可能也會是一張票或是多張，詳細開發流程可能就看專案的情形、討論的結論而定。

## 最後！

是我家工程師的提議，大的 Feature 可以開一個 Main Issue ，把所有確認過的重大規格、需求討論紀錄，都丟在裡面，並且把下面開發的子 Issue 內容 Ref 中，都寫上它，讓工程師在開發每一張票的時候，都可以回去看主 Issue 。

以上！
如果覺得好像有幫上你一點忙，就幫我留個言吧 👏

感謝大家收看～
