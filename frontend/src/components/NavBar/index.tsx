import Link from 'next/link';

import { IconHeart, IconHeartFilled, IconHome, IconHomeFilled, IconUser, IconUserFilled } from '#/svgs';

import * as styles from './index.css';

interface Props {
  clickedIndex?: number;
}

const NavBar = ({ clickedIndex }: Props) => {
  return (
    <nav className={styles.navWrapper}>
      <div>
        <IconHeart />
      </div>
      <div>
        <IconHome />
      </div>
      <div>
        <IconUser />
      </div>
    </nav>
  );
};

export default NavBar;
