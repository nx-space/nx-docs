/*
 * @FilePath: /nx-docs/src/components/VPButton/index.tsx
 * @author: Wibus
 * @Date: 2022-08-03 15:07:49
 * @LastEditors: Wibus
 * @LastEditTime: 2022-08-03 15:09:28
 * Coding With IU
 */
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export const VPButton = ({ type, to, text }) => {
  return (
    <div className={styles.action}>
      <Link className={clsx(styles.VPButton, styles.medium, styles[type])} to={to} >
        {text}
        </Link>
    </div>
  )
}