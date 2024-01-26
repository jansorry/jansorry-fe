import * as styles from './index.css';

const Loading = () => {
  return (
    <main className={styles.loadingWrapper}>
      <div>당신의 영수증이 발급되고 있습니다.</div>
      <div>0%</div>
    </main>
  );
};

export default Loading;
