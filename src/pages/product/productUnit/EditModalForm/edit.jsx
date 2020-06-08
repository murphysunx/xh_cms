import React, { useState } from 'react';

import { Button, Modal, Form, Input } from 'antd';
import CategoryFormItem from '../FormInModal';

const CollectionEditForm = ({ visible, onCreate, onCancel, name, category, specification }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new product"
      okText="Save"
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
          name="productName"
          label="Product Name"
          value={name}
          rules={[
            {
              required: true,
              message: 'Please input the name of product!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item name="modifier" className="collection-create-form_last-form-item"> */}
        {/*	<Radio.Group> */}
        {/*		<Radio value="public">Public</Radio> */}
        {/*		<Radio value="private">Private</Radio> */}
        {/*	</Radio.Group> */}
        {/* </Form.Item> */}
        <CategoryFormItem value={category} />

        <Form.Item name="description" label="Description" value={specification}>
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const EditCollectionsPage = (name, category, specification) => {
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
      <CollectionEditForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        name={name}
        category={category}
        specification={specification}
      />
    </div>
  );
};

export default EditCollectionsPage;
