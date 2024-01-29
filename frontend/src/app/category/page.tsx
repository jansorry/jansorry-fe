import { cookies } from 'next/headers';

import { getNagCategory } from '@/services/nag';
import Category from '@/containers/category';
import { nagResponse } from '@/types/nag';

const CategoryPage = async () => {
  // const cookieStore = cookies();
  // const refreshToken = cookieStore.get('refreshToken')?.value ?? '';
  // const data = await getNagCategory(refreshToken);
  const data: nagResponse[] = [
    {
      categoryId: 1,
      title: '학업/진로',
      nags: [
        {
          nagId: 1,
          content: '대학은 어디 갈거니?',
          price: 50000,
        },
        {
          nagId: 2,
          content: '군대는 도대체 언제 갈거니?',
          price: 50000,
        },
        {
          nagId: 3,
          content: '학점(학교 성적)은 잘 나오니?',
          price: 60000,
        },
        {
          nagId: 4,
          content: '언제까지 그렇게 놀거니?',
          price: 40000,
        },
        {
          nagId: 5,
          content: '이번 모의고사 몇 등급이니?',
          price: 30000,
        },
        {
          nagId: 6,
          content: '뭐 되려고 이러니?',
          price: 40000,
        },
        {
          nagId: 7,
          content: '그 대학 간 거 만족하니?',
          price: 50000,
        },
        {
          nagId: 8,
          content: 'ㅇㅇ이는 1등 했다더라',
          price: 60000,
        },
        {
          nagId: 9,
          content: '어릴 때는 똘똘했는데…',
          price: 70000,
        },
      ],
    },
    {
      categoryId: 2,
      title: '건강/외모',
      nags: [
        {
          nagId: 10,
          content: '이 부위만 성형하면 예쁠텐데',
          price: 50000,
        },
        {
          nagId: 11,
          content: '얼굴이 한 물 갔네..',
          price: 80000,
        },
        {
          nagId: 12,
          content: '키가 더 컸으면 좋았을 텐데..',
          price: 70000,
        },
        {
          nagId: 13,
          content: '너네 나이 때는 화장 안 해도 예뻐',
          price: 60000,
        },
        {
          nagId: 14,
          content: '대학도 갔는데 좀 꾸며라',
          price: 50000,
        },
        {
          nagId: 15,
          content: '피부가 왜 그래?',
          price: 70000,
        },
        {
          nagId: 16,
          content: '살 빼면 예쁘겠네/잘생겨지겠네',
          price: 70000,
        },
        {
          nagId: 17,
          content: '혹시 너 탈모니?',
          price: 60000,
        },
        {
          nagId: 18,
          content: '이 문신은 뭐니?',
          price: 30000,
        },
        {
          nagId: 19,
          content: '담배 좀 끊어라',
          price: 30000,
        },
      ],
    },
    {
      categoryId: 3,
      title: '연애/결혼',
      nags: [
        {
          nagId: 20,
          content: '너 연애는 안 하니?',
          price: 40000,
        },
        {
          nagId: 21,
          content: '그러니까 연애를 못하지',
          price: 50000,
        },
        {
          nagId: 22,
          content: '(애인)은 직장 어디 다니니?',
          price: 40000,
        },
        {
          nagId: 23,
          content: '(애인)이랑 결혼 할꺼니?',
          price: 50000,
        },
        {
          nagId: 24,
          content: '(애인) 언제 소개시켜줄거니?',
          price: 50000,
        },
        {
          nagId: 25,
          content: '(애인) 부모님은 뭐하시니?',
          price: 80000,
        },
        {
          nagId: 26,
          content: '(애인)이 보살이다.',
          price: 40000,
        },
        {
          nagId: 27,
          content: '이제 ㅇㅇ이도 결혼할 나이지.',
          price: 60000,
        },
        {
          nagId: 28,
          content: '혼수는 뭐 해온대?',
          price: 70000,
        },
        {
          nagId: 29,
          content: '신혼 집이 월세(전세)니?',
          price: 80000,
        },
        {
          nagId: 30,
          content: '맞선 안 볼래?',
          price: 70000,
        },
        {
          nagId: 31,
          content: '결혼 안 하면 노후에 쓸쓸해서 어떡해',
          price: 50000,
        },
        {
          nagId: 32,
          content: '완전 도둑놈 아니야?? 양심 없네',
          price: 30000,
        },
      ],
    },
    {
      categoryId: 4,
      title: '취업/직장',
      nags: [
        {
          nagId: 33,
          content: 'ㅇㅇ는 회사에서 승진했다던데 넌 언제해?',
          price: 70000,
        },
        {
          nagId: 34,
          content: '차라리 기술 배우는 건 어때?',
          price: 60000,
        },
        {
          nagId: 35,
          content: '알바는 안하니?',
          price: 40000,
        },
        {
          nagId: 36,
          content: '그게 스펙에 도움이 돼?',
          price: 60000,
        },
        {
          nagId: 37,
          content: '취업은 언제쯤 하려고?',
          price: 100000,
        },
        {
          nagId: 38,
          content: '너 친구들은 뭐해?',
          price: 80000,
        },
        {
          nagId: 39,
          content: '그 과, 취직은 되니?',
          price: 60000,
        },
        {
          nagId: 40,
          content: '눈만 낮추면 갈 데가 얼마나 많은데',
          price: 80000,
        },
        {
          nagId: 41,
          content: '연봉은 얼마나 받니?',
          price: 80000,
        },
        {
          nagId: 42,
          content: '그 회사 계속 다닐 거니?',
          price: 60000,
        },
        {
          nagId: 43,
          content: '졸업은 언제 할 생각이니?',
          price: 50000,
        },
        {
          nagId: 44,
          content: '그 회사 비전은 있니?',
          price: 90000,
        },
        {
          nagId: 45,
          content: 'ㅇㅇ는 대기업 취직했더라',
          price: 90000,
        },
        {
          nagId: 46,
          content: '아직도 용돈 받니?',
          price: 70000,
        },
      ],
    },
    {
      categoryId: 5,
      title: '가족/자녀',
      nags: [
        {
          nagId: 47,
          content: '돈 많이 벌어서 키워 준 값은 해야지',
          price: 80000,
        },
        {
          nagId: 48,
          content: '가족들한테 잘해라',
          price: 70000,
        },
        {
          nagId: 49,
          content: '네가 이 집안의 가장이야',
          price: 80000,
        },
        {
          nagId: 50,
          content: '다 너 잘되라고 하는 소리야',
          price: 90000,
        },
        {
          nagId: 51,
          content: '첫째니까 네가 잘 챙겨야지',
          price: 70000,
        },
        {
          nagId: 52,
          content: '공부도 못하는데 집안일은 네가 해야지',
          price: 80000,
        },
        {
          nagId: 53,
          content: '연락 좀 자주 해라',
          price: 40000,
        },
        {
          nagId: 54,
          content: 'ㅇㅇ는 매달 돈 보낸다더라',
          price: 80000,
        },
        {
          nagId: 55,
          content: '결혼 안 할 거면 부모님은 네가 모셔',
          price: 90000,
        },
        {
          nagId: 56,
          content: '집에서 밥은 해먹고 다니니?',
          price: 70000,
        },
        {
          nagId: 57,
          content: 'ㅇㅇ는 양가 도움없이 알아서 결혼했더라',
          price: 80000,
        },
        {
          nagId: 58,
          content: '내가 자식 집에 오는데 허락을 맡아야 되니?',
          price: 100000,
        },
        {
          nagId: 59,
          content: '가만히 있지 말고 엄마 좀 도와라',
          price: 40000,
        },
        {
          nagId: 60,
          content: '애 가질 때 되지 않았니?',
          price: 60000,
        },
        {
          nagId: 61,
          content: '딸이 있어야 안 외롭지',
          price: 50000,
        },
        {
          nagId: 62,
          content: '아들이 있어야 든든하지',
          price: 50000,
        },
        {
          nagId: 63,
          content: '요즘 애들은 애도 안 낳고',
          price: 60000,
        },
        {
          nagId: 64,
          content: '우리 때는 없는 살림에도 애 키웠어',
          price: 70000,
        },
      ],
    },
    {
      categoryId: 6,
      title: '기타',
      nags: [
        {
          nagId: 65,
          content: '이제 독립할 때 되지 않았어?',
          price: 70000,
        },
        {
          nagId: 66,
          content: '너 아직도 코인 하니?',
          price: 10000,
        },
        {
          nagId: 67,
          content: '돈은 많이 모았어?',
          price: 90000,
        },
        {
          nagId: 68,
          content: '반려 동물에 돈 너무 많이 쓴다',
          price: 80000,
        },
        {
          nagId: 69,
          content: '종교 생활 열심히 해야지',
          price: 60000,
        },
        {
          nagId: 70,
          content: '너 친한 친구는 있어?',
          price: 60000,
        },
        {
          nagId: 71,
          content: '아직도 아이돌 따라다니니?',
          price: 70000,
        },
        {
          nagId: 72,
          content: '여자/남자답게 굴어야지~',
          price: 60000,
        },
        {
          nagId: 73,
          content: '게임 좀 그만해라',
          price: 70000,
        },
        {
          nagId: 74,
          content: '핸드폰 좀 그만해라',
          price: 70000,
        },
        {
          nagId: 75,
          content: 'ㅇㅇ이는 주식으로 몇 천만원 벌었다던데.',
          price: 60000,
        },
        {
          nagId: 76,
          content: '그 때 그 아파트 몇 억 뛰었다더라',
          price: 70000,
        },
      ],
    },
  ];

  return <Category nagItems={data} />;
};

export default CategoryPage;
