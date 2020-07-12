import React from 'react';
import { Card } from 'antd';

const CatCard = (props) => {
  const catCode = props.code;
  const catName = props.name;

  return (
    <Card title={catCode} style={{ width: 300 }}>
      <p>{catName}</p>
    </Card>
  );
};

export default CatCard;
