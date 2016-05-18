# 刘影部分作品展示

version：20160517<br>

## 数学建模

即用数学语言描述实际现象，建立模型和约束条件并编码解决问题的过程。大学期间参加了数学建模培训及大大小小的比赛，所遇到过的问题比较常见的我认为可以分为两大类：运筹类和预测类。

运筹类即最优解问题。怎么安排可以获得最大利益？最短路径？最短时间？棒球最佳击球点在哪里？数独游戏设计？通常这类问题的难点在于问题本质的理解，如何把约束条件转化为相应的数学语言。
预测类在互联网领域也就是很火的大数据。这类问题难点则在数据采集。如何对数据质量进行控制？什么数据可用什么数据不可用？模型训练的结果好坏很大程度上取决于数据质量。

建模问题一般在Matlab上编码实现的，是因为它提供了非常丰富的数据可视化工具和模型包。
研究生期间做的海面雷达回波数据仿真及风浪流预测看起来非常抽象，实际上属于第二类。
首先，得不到质量较高的实测数据时，需要模拟大量数据来对模型进行验证。
其次，得到实测数据后，需要对数据质量进行控制和筛选。筛选标准要有物理意义。
最后，再用质量好的实测数据对模型参数进行进一步训练、优化。
数据的好坏对于模型很关键，预测完成后，将结果可视化呈现出来。

然而，这一整套数学方法对于互联网团队和项目有什么贡献？这里主要列举三个方面：
1. 小应用或者小游戏的设计。实际上就是对问题本质的理解，并转化为数学语言，例如掷骰子游戏。
2. 用户数据模拟。一个产品在没有用户的时候，是需要大量用户数据仿真的。举个简单的例子，AJAX分页，需要测试人员自己仿造数据填进去。
3. 用户需求预测。根据用户习惯，推荐歌曲或者视频，甚至比赛结果的预测。以“看比赛”网站为例，通过数据接口得到的JSON数据量是很大的，也许可以利用其中一些数据进行预测。

> 建议用`chrome`查看
[placeholder]:p
| 效果预览链接 | 源码 |
| :-------- | :--------:|
| [掷骰子](http://yingbiu.github.io/projects/maths/dice-roller/diceroller.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/maths/dice-roller) |
| [AJAX分页（无预览效果）]|   [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/maths/pagination) |
| [看比赛](http://yingbiu.github.io/projects/maths/match/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/maths/match) |
[/placeholder]:p

## Canvas

前面提到，数学建模通常用Matlab来完成数据可视化。而互联网项目里，Canvas和d3.js可以实现同样的功能，甚至以更绚丽的方式呈现数据，具有交互性。
此处展示的demo完全出于兴趣，非原创（作者见底部REFERENCE）。用户可以很直观地感受到Canvas的强大之处。值得强调的是，诸如黑洞、网格溶解效果都需要很强的数学建模基础来模拟。

> 建议用`chrome`查看
[placeholder]:p
| 效果预览链接 | 源码 |
| :-------- | :--------:|
| [ASCII Art](http://yingbiu.github.io/projects/canvas/asciiart/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/canvas/asciiart) |
| [网格溶解](http://yingbiu.github.io/projects/canvas/deliquescent/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/canvas/deliquescent) |
| [黑洞](http://whxaxes.github.io/canvas-test/src/Particle-demo/blackhole/blackhole.html) | [查看代码](https://github.com/whxaxes/canvas-test/tree/master/src/Particle-demo/blackhole) |
| [可视化音乐播放器](http://whxaxes.github.io/canvas-test/src/Funny-demo/musicPlayer/index.html) | [查看代码](https://github.com/whxaxes/canvas-test/tree/master/src/Funny-demo/musicPlayer) |
| [更加惊人的音乐动画](http://www.georgeandjonathan.com/) | [查看代码（暂无）] |
[/placeholder]:p

## Flash H5 Canvas
> 建议用`chrome`查看
[placeholder]:p
| 效果预览链接 | 源码 |
| :-------- | :--------:|
| [父亲节](http://yingbiu.github.io/projects/maths/match/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/maths/match) |
[/placeholder]:p


## 个人简历
> 建议用`chrome`查看
[placeholder]:p
| 效果预览链接 | 源码 |
| :-------- | :--------:|
| [PC端](http://yingbiu.github.io/projects/portfolio/PC/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/portfolio/PC) |
| [移动端](http://yingbiu.github.io/projects/portfolio/mobile/index.html) | [查看代码](https://github.com/yingbiu/projects/tree/gh-pages/portfolio/mobile) |
[/placeholder]:p


## FreeCodeCamp Demos

## Author
Ying Liu

## REFERENCE
@jendewalt https://github.com/yingbiu/jennifer_dewalt
@whxaxes https://github.com/whxaxes/canvas-test
@pixelass  @enxaneta on codepen
