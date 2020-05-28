import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import CategoryTable from './category';

const TableList = () => {
  return (
    <PageHeaderWrapper>
      <CategoryTable />
    </PageHeaderWrapper>
  );
};

export default TableList;
