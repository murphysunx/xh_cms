import React, { useState } from 'react';

import { Button, Modal, Form, Input } from 'antd';
import NewCatForm from './newCatForm';

const CollectionCreateForm = ({ visible, onCreate, onCancel, cats }) => {
  const [form] = Form.useForm();
  console.log('start loading');
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="catName"
          label="Category Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of category!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <NewCatForm cats={cats} />
      </Form>
    </Modal>
  );
};

const NewCat = (props) => {
  const [visible, setVisible] = useState(false);
  const { cats } = props;

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
        New Category
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        cats={cats}
      />
    </div>
  );
};

export default NewCat;
