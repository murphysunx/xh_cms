import React from 'react';

import { Form, Modal, Input } from 'antd';

const EditProductForm = ({ visible, onCreate, onCancel, name, description }) => {
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
          <Input defaultValue={name} />
        </Form.Item>

        {/* <CategoryFormItem category={category} /> */}

        <Form.Item name="description" label="Description">
          <Input type="textarea" defaultValue={description} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProductForm;
