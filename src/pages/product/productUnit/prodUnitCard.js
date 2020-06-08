import React from 'react';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import EditCollectionsPage from './EditModalForm';

function handleEdit() {
  console.log('Edit');
}

const ProdUnitCard = (props) => {
  const prodUnitCode = props.code;
  const prodUnitCategory = props.category;
  const prodUnitSpecification = props.specification;

  return (
    <Card
      title={prodUnitCode}
      style={{ width: 300 }}
      actions={[<EditOutlined key="edit" onClick={handleEdit} />, <DeleteOutlined key="delete" />]}
    >
      <p>{prodUnitCategory}</p>
      <p>{prodUnitSpecification}</p>
      {/* <EditCollectionsPage 
        name={prodUnitCode} 
        category={prodUnitCategory}
        specification={prodUnitSpecification} /> */}
    </Card>
  );
};

export default ProdUnitCard;
