import { receiptContent, receiptData } from '@/types/receipt';
import { getQueryStringValues } from '@/utils/makeReceipt';
import { nagTotalResponse } from '@/types/nag';
import { getNagCategory } from '@/services/nag';
import { getAllNag } from '@/services/receipt';

import { Receipt } from '@/components/Receipt';

const SharedReceipt = async () => {
  const nagItems = await getAllNag();
  const content = getQueryStringValues(nagItems);

  return (
    <div>
      <Receipt content={content} />
    </div>
  );
};

export default SharedReceipt;
