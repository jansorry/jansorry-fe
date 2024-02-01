// server component example

import { users } from '@/containers/example/users';
import KakaoLogin from '@/containers/welcome/KakaoLoginButton';

import NagCard from '@/components/NagCard';
import User from './User';
import Button from '@/components/Button';
import { UserPreview } from '@/components/UserPreview';
import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';
import { tempReceiptContent } from '@/components/Receipt/tempReceipData';
import { Receipt } from '@/components/Receipt';
import {
  cardLargeComment,
  cardLargeNag,
  cardMedium,
  cardSmall,
  cardXsmall,
} from '@/components/NagCard/cardOptionsSet';

const Example = () => {
  return (
    <main>
      <Receipt content={tempReceiptContent} />
      <UserProfileImage imgSrc='/images/userProfileImage/temp-userProfile.png' />
      <UserProfileImage imgSrc='/images/userProfileImage/temp-userProfile.png' />
      <Receipt content={{ ...tempReceiptContent, type: 'normal' }} />
      {/* <UserProfileImage imgSrc='이미지 경로' size='large' large만 가능(안 넣을 경우 small디폴트)/>  */}
      <UserProfileImage imgSrc='/images/userProfileImage/temp-userProfile.png' />
      <UserProfileImage
        imgSrc='/images/userProfileImage/temp-userProfile.png'
        size='large'
      />
      <UserPreview
        imgSrc='/images/userProfileImage/temp-userProfile.png'
        nickname='테스트닉네임'
        subText='00분전'
      />
      <UserPreview
        imgSrc='/images/userProfileImage/temp-userProfile.png'
        nickname='테스트닉네임'
      />

      <NagCard cardOption={cardXsmall(1, 'xSmall', true)} />
      <NagCard cardOption={cardSmall(2, 'small')} />
      <NagCard cardOption={cardMedium(3, 'medium')} />
      <NagCard cardOption={cardLargeNag(4, 'largeNag')} />
      <NagCard cardOption={cardLargeComment(5, 'largeComment', true)} />
      <Button
        size='large'
        filled
        colorStyle='strongRed'
        type='button'
        link='https://www.naver.com'
      >
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
