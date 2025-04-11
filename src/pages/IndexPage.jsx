import React from 'react';
import styles from './IndexPage.module.scss';

const IndexPage = () => {
  return (
    <>
      <div className={styles.home}>
        <h1 className={styles.title}>개발자의 기술 블로그</h1>
        <p className={styles.subtitle}>React와 관련된 기술들을 공유합니다.</p>
      </div>
    </>
  );
};

export default IndexPage;
