---
title: "Essentials Warp 导出小记"
published: 2022-02-02
category: "开发"
tags:
  - "minecraft"
  - "spigot"
  - "教程"
  - "服务器"
  - "群组服"
image: "images/1643813119-ferenc-almasi-HfFoo4d061A-unsplash-2.jpg"
---

当我们的 Minecraft 服务器越开越大的时候，就极有可能面临从单服务器升级到群组服的挑战，而升级时总会遇到一两个插件数据无法转换为 MySQL 的情况。像是 Essentials 的 Warp，存的全是 .yml 文件，文件名还不支持中文。而通常支持多服务器的插件数据都会使用 MySQL 来存储，怎么把一大堆 YAML 转过去呢？刚好最近误打误撞学到了 JavaScript 和 NodeJS 的一些基础，写个脚本来帮忙转换一下数据吧。

写这个脚本最初目的是为了转换 [RIA Zth](http://ria.red) 从 1.13.2 至今流传下来的一堆 Warp 传送点。文件量还不少，有 285 个，全是 .yml，随便打开一个看看：

```
world: world
x: 6110.5
y: 69.86662827573538
z: 12805.5
yaw: -88.3502
pitch: 79.200066
name: q青森村c
```

还好，数据结构比较简单，刚好学 NodeJS 也拿来练练手顺便做点实事（

想要读取文件，NodeJS 官方提供了 fs 库，可以随心所欲的操作各种文件；同时想要解析 YAML，我们还得利用 yamljs 库；最后再带上个 minimist 接收处理命令行参数方便使用。

```
// 引用库
var fs = require('fs');
var yaml = require('yamljs');
// 引用 minimist 处理命令行参数
const args = require('minimist')(process.argv)
```

有了这些库就很简单了，首先读取指定文件夹下的所有文件：

```
// 用 fs 读取目录
fs.readdir(args.dir, function (err, files) {
    if (err) {
        return console.error(err);
    }

    console.log('读取到的文件:',files);
});
```

建立一个数组，循环遍历每个文件的内容，把它们从 YAML 读取成 JavaScript 对象：

```
// 为所有的 yaml 读取结果预先建立一个数组
    var inAll = new Array()
    // 循环读取每一个 yaml，并且添加到数组
    for (var i = 0; i < files.length; i++){
        let thisYaml = yaml.load(args.dir + '/' + files[i])
        inAll.push(thisYaml)
    }
```

读取全部 YAML 后，将数组转成 JSON 输出到 .json 文件里：

```
// 把结果的 JS 数组转换成 Json
    jsonedAll = JSON.stringify(inAll)

    fs.writeFile('export.json', jsonedAll, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("结果已保存到 export.json 中，可执行您的下一步操作。");
    });
```

完整的代码：

[GitHub](https://github.com/ "Github")

[MagmaBlock/TooManyYamls](https://github.com/MagmaBlock/TooManyYamls)

```
// 引用库
var fs = require('fs');
var yaml = require('yamljs');
// 引用 minimist 处理命令行参数
const args = require('minimist')(process.argv)

// console.log(args);

// 用 fs 读取目录
fs.readdir(args.dir, function (err, files) {
    if (err) {
        return console.error(err);
    }
    // 为所有的 yaml 读取结果预先建立一个数组
    var inAll = new Array()
    console.log('读取到的文件:',files);
    // 循环读取每一个 yaml，并且添加到数组
    for (var i = 0; i < files.length; i++){
        let thisYaml = yaml.load(args.dir + '/' + files[i])
        inAll.push(thisYaml)
    }
    // 把结果的 JS 数组转换成 Json
    jsonedAll = JSON.stringify(inAll)

    fs.writeFile('export.json', jsonedAll, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("结果已保存到 export.json 中，可执行您的下一步操作。");
    });

});
```

总之，读成一个总的 JSON 之后数据转换工作就会好办了很多，有很多比较方便的转换工具。我们群组化基本上要转成 MySQL，网上有很多工具能把 JSON 转成 CSV：[json to csv](https://www.bing.com/search?q=json+to+csv)。

转成 CSV 之后，我们根据新插件在 MySQL 中存储数据的方法手动调整一下 CSV 的列名，修正一下数据，保存。如果没有异常，就可以试着导入到 MySQL 了~

![](images/1643812604-image.png)
