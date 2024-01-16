import * as styles from './Content.css';
import Button from '@/components/Button';

const WelcomeContent = () => {
  return (
    <>
      <div className={styles.title}>This is Welcome Content</div>
      <Button>hey</Button>
    </>
  );
};

export default WelcomeContent;
