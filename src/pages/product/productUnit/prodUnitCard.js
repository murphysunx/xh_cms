import React from 'react';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import EditProductPage from './EditModalForm';

function handleEdit(props) {
  console.log('Edit');
  console.log(props);
}

const ProdUnitCard = (props) => {
  const prodUnitCode = props.code;
  const prodUnitCategory = props.category;
  const prodUnitSpecification = props.specification;

  return (
    <Card
      title={prodUnitCode}
      style={{ width: 300 }}
      actions={[
        <EditOutlined key="edit" onClick={handleEdit(props)} />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <p>{prodUnitCategory}</p>
      <p>{prodUnitSpecification}</p>
      <EditProductPage
        name={prodUnitCode}
        category={prodUnitCategory}
        description={prodUnitSpecification}
      />
      {/* <EditCollectionsPage 
        name={prodUnitCode} 
        category={prodUnitCategory}
        specification={prodUnitSpecification} /> */}
    </Card>
  );
};

export default ProdUnitCard;
