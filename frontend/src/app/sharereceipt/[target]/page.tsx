import SharedReceipt from '@/containers/sharereceipt';

interface Props {
  params: { target: 'family' | 'friend' };
}
const ShareReceipt = async ({ params }: Props) => {
  return <SharedReceipt />;
};

export default ShareReceipt;
