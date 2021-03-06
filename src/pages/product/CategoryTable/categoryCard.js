import React from 'react';
import { Card } from 'antd'


const CategoryCard = (props) => {
  const catCode = props.code;
  const catName = props.name;

  return (
    <Card bordered={true} title={catCode} style={{ width: 300 }}>
      <p>{catName}</p>
    </Card>
  );
}

export default CategoryCard;
