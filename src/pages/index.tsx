import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { VPButton } from '../components/VPButton';

function HomepageHeader() {

  return (
    <div className={clsx(styles.VPHero, styles.VPHomeHero)}>
      <div className={styles.container}>
        <h1 className={styles.name}>
          <span className={styles.clip}>NEXT Space</span>
        </h1>
        <p className={styles.text}>多样且强大的下一代空间</p>
        <p className={styles.tagline}>你的下一个博客空间就是它！冲！</p>
        <div className={styles.actions}>
          <VPButton type={'brand'} to={'/docs/intro'} text={'Get Started'} />
          {/* <div className={styles.action}>
            <Link className={clsx(styles.VPButton, styles.medium, styles.alt)}>Get Started</Link>
          </div> */}
          <VPButton type={'alt'} to={'/docs/intro'} text={'Why NEXT?'} />
          <VPButton type={'alt'} to={'https://github.com/nx-space'} text={'View on GitHub'} />
          <VPButton type={'alt'} to={'https://jq.qq.com/?_wv=1027&k=htTPR5bz'} text={'QQ Group'} />
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
      <div className={styles.VPHome}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
