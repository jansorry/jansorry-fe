import { IconArrowLeft } from '#/svgs';

import * as styles from './index.css';

interface Props {
  title: string;
  hasPrevious?: boolean;
}

const Header = ({ title, hasPrevious }: Props) => {
  return (
    <nav className={styles.headerWrapper}>
      {hasPrevious ? (
        <div className={styles.perviousButton}>
          <IconArrowLeft />
        </div>
      ) : (
        <div />
      )}
      <div className={styles.title}>{title}</div>
    </nav>
  );
};

export default Header;
