import WelcomeContent from '@/containers/welcome/Content';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';

const Welcome = () => {
  return (
    <main>
      <Header title='헤더 테스트' hasPrevious />
      <WelcomeContent />
      <NavBar clickedIndex={2} />
    </main>
  );
};

export default Welcome;
