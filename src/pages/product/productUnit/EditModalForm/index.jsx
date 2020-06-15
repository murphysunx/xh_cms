import React, { useState } from 'react';
import { Button } from 'antd';
import EditProductForm from './edit';

const EditProductPage = (props) => {
  console.log(props);

  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit
      </Button>
      <EditProductForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        name={props.name}
        category={props.category}
        description={props.description}
      />
    </div>
  );
};

export default EditProductPage;
