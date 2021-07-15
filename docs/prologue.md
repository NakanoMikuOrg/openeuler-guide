# 序章

## 🚧 文档施工中

> ### 🎐 千里之行始于足下
>
> 本指南包含从 openEuler 安装、显卡驱动、日常软件配置，到多媒体制作、编程等你可能需要的全部内容。

## 📕 相关信息

你可能会问：为什么要有这份指南？openEuler 官方不是有 [文档](https://docs.openeuler.org/zh/) 吗？

确实是这样。甚至相比于官方的文档，本指南并不会包罗万象、也不会探讨一些复杂深奥的话题。但本指南会**一步一步引导读者了解 openEuler、在实践中收获**。同时由于 openEuler 官方文档相对偏向企业用户，往往更加关注于服务器相关的一些话题，而本指南则希望能够通过一些生动且富有实际意义的例子，激发大家对 openEuler 的兴趣、对 Linux 的兴趣，推广 openEuler，推动 openEuler 社区乃至中国开源社区的发展。

## 📑 章节信息

### 1. 🌱 新手上路

[🌱 新手上路]() 章节主要目标是首先能让读者快速安装并顺利体验 openEuler。共分为 [💾 基础安装]() 和 [🔩 进阶安装]() 两部分：

- [💾 基础安装]() 这一部分首先会讨论在物理机（普通计算机或者树莓派）或虚拟机中安装尝试 openEuler 之前需要做的一些准备工作，然后会详细的讲述它们各自具体的安装方法

- [🔩 进阶安装]() 这一部分则会讨论安装图形界面以及配置一些基础的服务等等

## 💻 本地运行

:::: code-group
::: code-group-item Pacman

```bash{4-5}
sudo pacman -S nodejs yarn # 安装 nodejs 和 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item HomeBrew

```zsh{4-5}
brew install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::: code-group-item Scoop

```bat{5-6}
scoop install nodejs # 安装 nodejs
scoop install yarn # 安装 yarn
git clone https://github.com/NakanoMikuOrg/openeuler-guide
cd ./arch-guide
yarn install
yarn docs:dev
```

:::
::::

其它系统请参阅 [Yarn 中文文档](https://yarn.bootcss.com/docs/install/) 安装 `Yarn`。

## 🔔 隐私提醒

本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。

## 🌱 参与贡献

更多信息请参阅 [贡献指南](/postscript/contribute.md)。

## 🎋 版权说明

[![by-sa](./static/svg/by-sa.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.zh)

网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 [知识共享署名-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 进行许可。

更多信息请参阅 [版权说明](/postscript/copyright.md)。
