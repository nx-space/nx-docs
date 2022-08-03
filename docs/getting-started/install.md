---
sidebar_position: 1
description: "学习如何在本地或云上安装 NEXT，并即可启动 NEXT"
---

# 安装流程

NEXT 实际上是几个项目的总称，它们属于一个组合。

:::caution
此教程仅描述如何安装 服务端 与 后台服务。由于前端有两种选择，因此不会在此处描述。

**建议安装前先阅读完文档，然后再进行安装。**
:::

## 要求

- 必须有终端
- 必须事先安装 **MongoDB 和 Redis**
- Node.js v16.14 或更高版本（你可以运行 `node -v` 命令查看版本号）。 你可以用 [nvm](https://github.com/nvm-sh/nvm) 来管理同一机器上的多个 Node 版本。
  - 安装 Node.js 时，建议勾选所有和依赖相关的选项。
- 平台：macOS、Linux（Windows 理论上仅支持部分功能，此平台不考虑维护）
- 使用 Docker Compose 安装 NEXT ，请确保你的终端已经安装了 Docker。

## 安装方法对比

:::info
目前推荐使用 **Docker Compose 安装**，它更容易管理和维护。仅需要几个命令，即可安装，启动，停止和卸载。
:::

文档提供了三种安装方法，它们各有利弊：

**Docker Compose 安装**：管理便捷，但仅支持**服务端**安装，并且一旦卸载，数据也会被删除。

**使用已构建包安装**：支持**服务端**和**后台**安装，关闭也不会主动卸载数据，但是更新较为繁琐。

**手动编译安装**：通用方案，支持**全部安装**，可以自己做*自定义修改*，但是更新非常繁琐，并且需要服务器有足够的性能才能编译。

## 安装服务端

### 使用 Docker Compose 安装

使用已编写好的 Docker Compose 可以很快地安装 NEXT，并且无需安装任何其他软件。

```bash
wget https://fastly.jsdelivr.net/gh/nx-space/core@main/docker-compose.yml
docker compose up -d
```

访问 [http://localhost:3333](http://localhost:3333), 如果正常返回数据，则表示服务端安装成功啦！


:::danger
使用 Docker Compose 安装服务端，数据库和 Redis 容器将会在内部被创建，并且将会被绑定到本地的端口

**当你卸载时，它们将会被删除！如果你需要保存数据，请进入后台面板，将数据备份下载**
:::

### 使用已构建包安装

从 [GitHub Release](https://github.com/nx-space/core/releases) 页面，找到符合你的系统的包，点击下载构建好的包，建议将其放在根目录中并解压，进入解压的目录，运行以下命令：

```bash
$ node index.js
```

若返回如以下内容，则表明您已启动成功～

```bash
ℹ [MongoDB] connecting...                                                                                             
ℹ [MongoDB] readied!                                                                                                  
ℹ ENV: undefined                                                                                                
✔ [P92152] 服务器正在监听: http://127.0.0.1:3333                                                                                                     
ℹ  [NEXT]  NxServer 已启动. +5322ms                                                                                                    
ℹ  [ConfigsService]  ConfigsService 初始化完成                                                                                                         
```

#### 使用 screen 持续化启动

你可以使用反向代理（如 Nginx）来使用域名访问服务器，持续化启动你可以使用 screen

```bash
screen -S <session_name> # <session_name> 自定
# example: screen -S nx-core
```

脱离会话你可以使用 Ctrl+a d 也可以直接断开 ssh 链接

```bash
screen -ls # 获取全部的 screen 会话
# 返回与以下相似：
# There are screens on:
#     123123.xxxxxx
#     23454.nx-core
screen -r <ID> # 此处 <ID> 填写 `23454` 则会进入 nx-core 会话
```

进入会话后，你可以按照文档所提出的安装方式安装了，对于这种方法仅建议**使用构建包安装**或**手动编译安装方法**

#### 使用 pm2 持续化启动

当然你也可以使用 pm2，配置文件可以参照此处:

```js
module.exports = {
  apps: [
    {
      name: 'nx-core',
      script: 'index.js', // 启动文件
      autorestart: true, // 自动重启服务器
      watch: false, // 如果您的服务器支持监控，请将此项设置为 true
      instances: 2, // 启动两个实例, 如果无法启动请修改为 1
      exec_mode: 'cluster', // 启动模式，cluster 为多进程模式
      max_memory_restart: '230M', // 内存限制，超过将自动重启服务器
      atgs: '--color' // 启动参数
      env: {
        NODE_ENV: 'production',
        NODE_PATH: ..., // 设置路径, 请在终端输入 npm root --quiet -g 查看
      }
    }
  ]
}
```

:::tip
请在启动前设置好 `NODE_PATH` 环境变量，否则将无法正常使用

运行以下命令，将命令返回的信息输入

```bash
$ npm root --quiet -g
```

输入示例：`NODE_PATH: "/usr/local/lib/node_modules"`

:::

接着你就可以使用 pm2 启动了，运行以下命令：

```bash
$ pm2 start 你刚刚输入配置文件的文件名
# example: pm2 start nx-core.config.js
```

相关命令：

```bash
$ pm2 list # 查看所有运行的服务器
$ pm2 start <file_name> # 启动服务器
$ pm2 stop <name> # 停止服务器
$ pm2 restart <name> # 重启服务器
$ pm2 delete <name> # 删除服务器
$ pm2 logs <name> # 查看服务器日志
$ pm2 monitor # 查看所有服务器的监控信息
$ pm2 flush # 删除所有服务器的监控信息
$ pm2 reload <name> # 重新加载服务器
$ pm2 reload <name> --env <env> --script <script> --args <args> # 重新加载服务器并设置环境变量、脚本和参数

```

### 手动编译安装

> 请先安装 [Git](https://git-scm.com/)

```bash
git clone https://github.com/nx-space/core.git nx-space-core --depth 1
cd nx-space-core && git fetch --tags && git checkout $(git rev-list --tags --max-count=1) 
pnpm ci
pnpm build
pnpm prod:start # 启动服务器
pnpm prod:pm2 # 使用 pm2 启动服务
```

你可以使用反向代理（如 Nginx）来使用域名访问服务器

## 安装后台面板

### 使用已构建包安装


从 [GitHub Release](https://github.com/nx-space/nx-admin/releases) 页面下载构建好的包，上传至服务器根目录，启动服务（如 Nginx），即可成功安装

### 手动编译安装


```bash
git clone https://github.com/nx-space/nx-admin.git nx-space-nx-admin --depth 1
cd nx-space-nx-admin && git fetch --tags && git checkout $(git rev-list --tags --max-count=1) 
pnpm ci
pnpm build
```

将 dist 文件夹上传至服务器根目录，启动服务（如 Nginx），即可成功安装