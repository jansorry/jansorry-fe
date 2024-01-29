// server component example
import { users } from '@/containers/example/users';
import { NagCardKeyOptions } from '@/types/nagCard';
import KakaoLogin from '@/containers/welcome/KakaoLoginButton';

import User from './User';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';
import { UserPreview } from '../../components/UserPreview';
import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

const Example = () => {
  const card: NagCardKeyOptions = { categoryKey: 1, typeKey: 1, sizeKey: 3, textStyleKey: 2, text: 'test' };

  return (
    <main>
      {/* <UserProfileImage imgSrc='이미지 경로' size='large' large만 가능(안 넣을 경우 small디폴트)/>  */}
      <UserProfileImage imgSrc='/images/userProfileImage/temp-userProfile.png' />
      <UserProfileImage imgSrc='/images/userProfileImage/temp-userProfile.png' size='large' />
      <UserPreview imgSrc='/images/userProfileImage/temp-userProfile.png' nickname='테스트닉네임' subText='00분전' />
      <UserPreview imgSrc='/images/userProfileImage/temp-userProfile.png' nickname='테스트닉네임' />
      <NagCard card={card} />
      <NagCard card={card} />
      <Button size='large' filled colorStyle='strongRed' type='button' link='https://www.naver.com'>
        영수증 사진으로 공유하기
      </Button>
      <Button size='large' filled colorStyle='strongRed' type='button'>
        영수증 사진으로 공유하기
      </Button>
      <Button size='small' filled colorStyle='black' type='button'>
        색상테스트
      </Button>
      <Button size='large' filled colorStyle='lightGray' type='button'>
        색상테스트
      </Button>
      <div>
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
      <KakaoLogin />
    </main>
  );
};

export default Example;
