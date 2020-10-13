import React, { useState } from 'react';

import { Button, Modal, Form, Input, Select } from 'antd';
import { connect } from 'dva';
import { GlobalModelState } from '@/models/type/global';
import { Dispatch } from 'umi';
import { Category, ICategoryAPI } from '../Category';

const { Option } = Select;

const namespace = 'productCategories';

const mapStateToProps = (state: GlobalModelState) => {
  const catList = state[namespace].data;
  return {
    catList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCat: (cat: ICategoryAPI) => {
      dispatch({
        type: `${namespace}/addProductCategory`,
        payload: cat,
      });
    },
  };
};

interface Props {
  addCat: (cat: ICategoryAPI) => void;
  catList: Category[];
}

const CollectionsPage = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const cats = props.catList.map((cat) => {
    const { name, id } = cat;
    return (
      <Option key={`catOption-${id}`} value={id}>
        {name}
      </Option>
    );
  });
  // the option for not having any parent cat
  const nullOption = (
    <Option value="null" key="catOption-null">
      null
    </Option>
  );
  const catOptions = [nullOption].concat(cats);
  /**
   * create new cat
   * @param {*} values
   */
  const onCreate = (values: ICategoryAPI) => {
    console.log('Received values of form: ', values);
    setVisible(false);
    props.addCat(values);
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
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values as ICategoryAPI);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="createCategoryForm">
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
          <Form.Item
            name="parentCat"
            label="parent category"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Select placeholder="Select a catgory as parent category" allowClear>
              {catOptions}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsPage);
