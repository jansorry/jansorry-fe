import * as styles from '@/containers/home/index.css';

const CardsPresent = () => {
  return (
    <div>
      <div>카드 들어감</div>
      <div className={styles.homeText({ contentType: 'content' })}>잔소리를 n번 들으셨네요.</div>
      <div className={styles.homeText({ contentType: 'guidance' })}>화면을 클릭해주세요.</div>
    </div>
  );
};

export default CardsPresent;
