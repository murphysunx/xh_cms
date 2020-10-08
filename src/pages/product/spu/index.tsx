import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';

import { Spu } from './Spu';
import { SpuCard } from './SpuCard';

export function SpuPage(props: { spus: Spu[] }) {
  const { spus } = props;
  const spuCards = spus.map((spu) => <SpuCard spu={spu} />);

  return <PageHeaderWrapper>{spuCards}</PageHeaderWrapper>;
}
