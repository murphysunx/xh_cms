import React from 'react';

import { Form, Modal, Input } from 'antd';

import CategoryFormItem from '../FormInModal';

const EditProductForm = ({ visible, onCreate, onCancel, name, category, description }) => {
  const [form] = Form.useForm();

  console.log(name);
  return (
    <Modal
      visible={visible}
      title="Edit product"
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
          rules={[
            {
              required: true,
              message: 'Please input the name of product!',
            },
          ]}
        >
          <Input defaultValue="123" placeholder={name} />
        </Form.Item>

        <CategoryFormItem category={category} />

        <Form.Item name="description" label="Description">
          <Input type="textarea" defaultValue={description} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProductForm;
