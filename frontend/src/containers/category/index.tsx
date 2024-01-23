import { nag } from '@/types/nag';

interface Props {
  nags: nag[];
}

const Category = ({ nags }: Props) => {
  return (
    <>
      {nags.map((nagging: nag) => (
        <>
          <div>{nagging.nagId}</div>
          <div>{nagging.categoryId}</div>
          <div>{nagging.content}</div>
          <div>{nagging.price}</div>
        </>
      ))}
    </>
  );
};

export default Category;
