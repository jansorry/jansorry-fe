import { nag } from '@/types/nag';

interface Props {
  nagItems: nag[];
}

const Category = ({ nagItems }: Props) => {
  return (
    <>
      {nagItems.map((nagItem: nag) => (
        <>
          <div>{nagItem.nagId}</div>
          <div>{nagItem.categoryId}</div>
          <div>{nagItem.content}</div>
          <div>{nagItem.price}</div>
        </>
      ))}
    </>
  );
};

export default Category;
