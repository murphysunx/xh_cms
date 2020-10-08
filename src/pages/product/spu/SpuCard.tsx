import { Card } from 'antd';
import React from 'react';
import { Spu } from './Spu';

export function SpuCard(props: { spu: Spu }) {
  // const [count, setCount] = useState(0);

  const { spu } = props;
  const { name, desc } = spu;

  return <Card title={name}>{desc}</Card>;
}
