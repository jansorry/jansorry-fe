import { userDataResponse } from '@/types/userData';
import { UserProfile } from '@/containers/mypage/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';

interface Props {
  myPageItems: userDataResponse;
}

const MyPageContainer = ({ myPageItems }: Props) => {
  // const NagCount: number = nagTotalCount?.content?.length;

  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile myPageItems={myPageItems} />
        </div>
        {/* <div>{NagCount ? <ProfileWithContent /> : <ProfileNoContent />}</div> */}
        <div className={styles.bottomNav}>
          <NavBar clickedIndex={3} />
        </div>
      </main>
    </>
  );
};

export default MyPageContainer;
