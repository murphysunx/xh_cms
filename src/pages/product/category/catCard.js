import React from 'react';
import { Card } from 'antd';

const CatCard = (props) => {
  const catCode = props.cat_id;
  const catName = props.cat_name;

  return (
    <Card bordered="true" title={catCode} style={{ width: 300 }}>
      <p>{catName}</p>
    </Card>
  );
};

export default CatCard;
