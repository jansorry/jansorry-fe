import { nag } from '@/types/nag';

interface Props {
  nags: nag[] | null;
}

const Category = ({ nags }: Props) => {
  return (
    <div>
      {nags ? (
        nags.map((nagging: nag) => (
          <>
            <div>{nagging.nagId}</div>
            <div>{nagging.categoryId}</div>
            <div>{nagging.content}</div>
            <div>{nagging.price}</div>
          </>
        ))
      ) : (
        <div>서버 에러</div>
      )}
    </div>
  );
};

export default Category;
