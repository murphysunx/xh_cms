import React, { useState } from 'react';

import { Button, Modal, Form, Input } from 'antd';
import ParentCatFormItem from './parentCatFormItem';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
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
        {/* <Form.Item name="description" label="Description"> */}
        {/*	<Input type="textarea" /> */}
        {/* </Form.Item> */}
        {/* <Form.Item name="modifier" className="collection-create-form_last-form-item"> */}
        {/*	<Radio.Group> */}
        {/*		<Radio value="public">Public</Radio> */}
        {/*		<Radio value="private">Private</Radio> */}
        {/*	</Radio.Group> */}
        {/* </Form.Item> */}
        <ParentCatFormItem />
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  /**
   * create new cat
   * @param {*} values
   */
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
      />
    </div>
  );
};

export default CollectionsPage;
