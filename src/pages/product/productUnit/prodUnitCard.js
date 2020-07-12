import React from 'react';
import { Card } from 'antd';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProductPage from './EditModalForm';

const ProdUnitCard = (props) => {
  const prodUnitCode = props.code;
  const prodUnitCategory = props.category;
  const prodUnitSpecification = props.specification;

  return (
    <Card title={prodUnitCode} style={{ width: 300 }}>
      <p>{prodUnitCategory}</p>
      <p>{prodUnitSpecification}</p>
      <EditProductPage
        name={prodUnitCode}
        category={prodUnitCategory}
        description={prodUnitSpecification}
      />
    </Card>
  );
};

export default ProdUnitCard;
