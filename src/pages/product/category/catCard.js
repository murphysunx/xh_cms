import React from 'react';
import { Card } from 'antd';

const CatCard = (props) => {
  // const catCode = props.code;
  // const catName = props.name;
  const { cat_id, cat_name } = props;
  console.log(`cat cart props`, props);

  return (
    <Card title={cat_id} style={{ width: 300 }}>
      <p>{cat_name}</p>
    </Card>
  );
};

export default CatCard;
