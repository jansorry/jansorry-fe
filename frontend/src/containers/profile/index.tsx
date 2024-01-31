import { userDataResponse } from '@/types/userData';
import { UserProfile } from '@/containers/profile/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';

interface Props {
  profileItems: userDataResponse;
}

const Profile = ({ profileItems }: Props) => {
  // nagCount 정보 불러오기
  const dummyNagCount: number = 0;

  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile profileItems={profileItems} />
        </div>
        {/* <div>{nagCount ? <ProfileWithContent /> : <ProfileNoContent />}</div> */}
        {/* 더미 데이터 확인용 코드 */}
        <div>
          {dummyNagCount ? <ProfileWithContent /> : <ProfileNoContent />}
        </div>
        <div className={styles.bottomNav}>
          <NavBar clickedIndex={3} />
        </div>
      </main>
    </>
  );
};

export default Profile;
