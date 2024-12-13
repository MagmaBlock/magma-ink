---
title: 博客换新——为什么我放弃了 WordPress
published: 2024-07-18
description: ""
image: ""
tags: []
category: "经验"
draft: false
---

在本站建站初期使用的是 [WordPress](https://cn.wordpress.org/)，这是一款基于 PHP 开发的博客和网站应用程序。WordPress 是一个经典且古老的网站应用程序，根据其官方的描述，它也是全球数百万网站（从创作者、小型企业到大型企业）的首选开源发布平台。我于 2019 年建站时就开始使用它。

WordPress 有简单易懂的图形化后台界面，对于没有建站经验的用户来说，提供了完整的站点管理功能和丰富的主题功能。然而，随着我对前端研究的深入和对无服务器及轻量应用程序的持续追求，WordPress 逐渐成为我正在维护的众多服务中最为繁杂的一项。对于我这个前端开发者来说，PHP 编写的它自定义起来也有很多不便。

## WordPress 性能问题

尽管 PHP 语言是用于网页的一个经典脚本语言，但它的性能并不高。在 WordPress 配合常用主题和插件不做任何优化的情况下，高并发能力并不好，几十并发即可将整个网站卡住。如果遇到被人压测等情况就比较麻烦，需要专门进行性能调优。

在使用 WordPress 的古腾堡区块文章编辑器时，较长文章也容易出现界面未响应，给我留下了不太好的体验。对于如今习惯使用 Markdown 来写文章的我来说，WordPress 也缺少一些 Markdown 快捷方式和其他细节上的功能。

## WordPress 二次开发有难度

我是一个前端开发者，不熟悉 PHP 这一套语言，因此自定义站点的样式和增加新的组件也有难度。因为 WordPress 是由服务端 PHP 进行渲染的，因此如果我想要使用一些现代的前端框架，如 Vue 和一些其他的 NPM 依赖就会比较麻烦。

## WordPress 的安全问题

在使用 WordPress 时，我还遇到一些安全问题。

第一次是在早些年，由于服务器上其他的 WordPress 实例使用了受到攻击的主题，导致服务器上数个 PHP 程序都被木马破坏，幸好我有备份的习惯，最终还是安全还原了。并且加上了基础的隔离等措施。

后来，我自己的站点也在独立服务器的情况下遭受不明方式的注入，导致网页跳转至境外的虚假医药售卖网站，这十分危险，因为我的博客域名是有备案的。最后不得不删除服务器上的所有 php 文件，重装 WordPress 才解决。

因为 WordPress 是世界上最知名的网站应用程序，所以有很多针对 WordPress 站点的爆破攻击。每天，站点的登录接口都会遭到众多不明来源的登录尝试，在我更换站点程序前，平均每周都会有各种广告 bot 在文章的评论区尝试发送评论。同时，WordPress 每次出现漏洞时如果官方修复不及时或用户更新不及时，就很有可能会被黑客利用，导致站长在不知情的情况下被攻击。

我所在的 Minecraft 服务器社区的官方站点 [莉亚红报社](https://ria.red)，此前也使用了 WordPress 作为应用程序。在不明时间，站点突然变成了 WordPress 安装后的默认主页。登录 SSH 查看发现 WordPress 被利用漏洞更改了其数据库的链接地址，指向了一个不知名的服务器上的 MySQL。经过研究，我们猜测此举是为了对管理员的账户和密码进行钓鱼。因此，我们将社区的博客更换为了静态站点，而更换新程序后的体验也成为了我更换博客程序的契机。

## 迁移至静态博客

我选择了静态博客，作为一个前端开发者，这会更加熟悉和轻量化。我使用了 [Astro](https://docs.astro.build/zh-cn/getting-started/)，一个静态站点生成程序（[SSG](https://cn.vuejs.org/guide/scaling-up/ssr.html#ssr-vs-ssg)）。此类静态博客生成程序的原理是，在文章更新时构建站点，将 Markdown 和源码等文件渲染成 HTML，然后部署至任意的静态网站托管即可。这类网站相较于 WordPress 来说，不需要在用户请求时动态地生成网页界面，而是提供已经生成好的网页，直接返回给用户。

![新版](images/magmaink-new.png)
_本站的新版本_

## 静态博客的优势

静态网站可以轻松地扛下百万甚至更高的并发量，同时还有极低的成本，因为不需要自己的服务器和数据库。在早年我没有选择此类静态博客生成器，原因是当时认为每次编辑完文章就要重新构建，并且上传的操作十分费力。同时，当时前端构建并没有像现在一样如此流行，前端构建的行为更难理解，生态环境也没有发展起来。

而如今，Git 推送后自动构建自动部署静态网站的服务已经非常多，如 Vercel、Cloudflare Pages 等。使用这类服务，你只需要写完文章后点击 Git 的提交按钮，将文章提交到 GitHub 或其他 Git 存储库，提交后，自动部署服务将自动为你构建站点并发布出来，你无需其他操作。此外，这样的工作流也避免了后台被入侵的可能性——因为它根本没有后台，除非你的 GitHub 被盗号或域名被劫持。

选用 Astro 还有一些优点，因为它更易于二开，其支持 React、Vue、Svelte 等主流前端框架同时使用，原理是被他们称作 [Astro 群岛](https://docs.astro.build/zh-cn/concepts/islands/)的技术。比如作为一个 Vue 开发者，我可以使用 Vue 来编写一些自定义的组件，我使用的主题也使用了 TailwindCSS 原子化样式组件库。如果我有其他的框架想使用，只需要安装新的包，并且编写简短的代码即可。

![magmaink-new-friend-links](images/magmaink-new-friend-links.png)
_自行编写的友链组件_

## 静态站点的缺点

当然，静态站点博客也不是那么完美。如果你没有自己的服务端，那么也就缺少了一些互动的功能。比如目前没有评论功能，不过可以通过单独的评论系统来实现，有很多是不需要自己的服务器的。我也许将在未来时间为本站再次恢复评论功能。

静态站点也有另一个问题，在中国大陆地区，缺少像 Vercel 这样的自动化静态站点部署服务（即 CI/CD）。我没有在国内找到一个体验达标且价格符合小微站点的服务。我尝试查看了腾讯云的静态网站功能，每个月收费 15 元，那么计算下来一年就会花费至少 180 元。对于静态站点来说还是过于昂贵了。

## 自动化部署解决方案

不过这个问题在最近解决了。我通过自行编写 JavaScript 脚本的方式，实现了将构建成品自动上传至阿里云对象存储（或其他 S3 兼容存储）的功能。我将脚本增加在 Vercel 自动构建的运行中。当我推送更新时，Vercel 的构建就自动启动，构建完成后不仅会部署在他们的服务器上，还会帮助我上传至阿里云，而我只需为阿里云对象存储增加一套自己的 CDN。配合 DNS 分地域解析，将海外解析至 Vercel，国内解析至我的 CDN，实现了博客全球高并发和低延迟（载入延迟低于 0.3s）。而这几乎都是依赖免费或只需花几块钱的商用云服务。

由于我的博客在境内有备案，因此我会优先选择国内的服务器来部署。在选择方案时，我发现国内对于此类静态站点自动化部署（即 CI/CD）的服务还是非常少的。我不得不编写脚本来解决部署问题。这个脚本是配合 GPT 来编写的。由于我维护的其他服务可能也会用到这类将网站部署到对象存储的需求，因此我考虑尝试将此自动上传的脚本开源，制成 npm 包共享（如果我有时间的话），让更多国内的小微站点站长都能用到更轻松的部署方案。