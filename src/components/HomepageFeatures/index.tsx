import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element | String;
  icon?: String,
};

const FeatureList: FeatureItem[] = [
  {
    icon: '📦',
    title: '开箱即用',
    description: "仅需一句命令即可使用 Docker 启动完整项目，同时使用 NxCli 也可自动部署",
  },
  {
    icon: '📚',
    title: '速度飞起',
    description: "服务端支持异步加载、并发处理、数据缓存等，客户端支持离线缓存、渲染模块化等。",
  },
  {
    icon: '🔑',
    title: '指标强大',
    description: "前端服务端渲染 (SSR) 支持，为 SEO 和高性能提供支持；服务端使用 Nodejs 异步开发，提供更高的性能。",
  },
  {
    icon: '💡',
    title: '主题市场',
    description: "主题多种开发方式，支持使用模板引擎耦合式开发或前后端分离开发，提供更多的主题选择。",
  },
  {
    icon: '🛠️',
    title: '插件系统',
    description: "使用插件对博客功能自定义扩展，打造更加强大的博客空间。",
  },
  {
    icon: '💬',
    title: '评论系统',
    description: "NEXT 提供了一个简单的评论系统，使用 Lit 框架，兼容性更强！",
  }
];

function Feature({ title, description, icon }: FeatureItem) {
  return (
    <div className={clsx(styles.grid3, styles.item)}>
      <article className={clsx(styles.VPFeature)}>
        <div className={clsx(styles.icon)}>{icon}</div>
        <h2 className={clsx(styles.title)}>{title}</h2>
        <p className={clsx(styles.details)}>{description}</p>

      </article>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={clsx(styles.VPFeatures, styles.VPHomeFeatures)}>
      <div className={clsx(styles.container)} >
        <div className={clsx(styles.items)}>
          {FeatureList.map((item, i) => (
            <Feature key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
