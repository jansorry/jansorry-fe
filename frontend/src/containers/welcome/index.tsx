import WelcomeContent from '@/containers/welcome/Content';

import NavBar from '@/components/NavBar';

const Welcome = () => {
  return (
    <main>
      <WelcomeContent />
      <NavBar clickedIndex={2} />
    </main>
  );
};

export default Welcome;
