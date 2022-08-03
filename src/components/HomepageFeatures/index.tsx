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
    title: '简单易用',
    description: "NEXT 是一个简单易用的博客程序，你可以通过一键命令来立即创建一个新的博客空间。",
  },
  {
    icon: '📚',
    title: '专注于空间',
    description: (
      <>
        NEXT 专注于分享空间的开发，您可以在 NEXT 中尽情地分享您身边的事情，写写文章，写写日记
      </>
    ),
  },
  {
    icon: '📝',
    title: '基于强大框架',
    description: (
      <>
        NEXT 基于许多强大的框架，在一定程序上保证了网站的安全性。
      </>
    ),
  },
  {
    icon: '🛠️',
    title: '坚持开源项目',
    description: "NEXT 坚持开源项目，您可以在 GitHub 上查看源代码，并且可以自由地修改。",
  },
  {
    icon: '💻',
    title: '持续学习改进',
    description: "NEXT 将会持续学习改进，不断更新迭代版本，以便您能够更好地使用它。",
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
