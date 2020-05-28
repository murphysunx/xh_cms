import React from 'react';
import { Card } from 'antd';

const ProdUnitCard = (props) => {
  const prodUnitCode = props.code;
  const prodUnitCategory = props.category;
  const prodUnitSpecification = props.specification;

  return (
    <Card title={prodUnitCode} style={{ width: 300 }}>
      <p>{prodUnitCategory}</p>
      <p>{prodUnitSpecification}</p>
    </Card>
  );
};

export default ProdUnitCard;
