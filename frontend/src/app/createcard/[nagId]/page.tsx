interface Props {
  params: { nagId: string };
}

const createCardPage = ({ params }: Props) => {
  const { nagId } = params;

  return <p>{nagId}</p>;
};

export default createCardPage;
