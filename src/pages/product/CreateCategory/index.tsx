import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import { Form, Input, Button, Select  } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    // TODO
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="category"
        label="分类名称"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input 
          placeholder="给分类起个名称" 
          allowClear/>
      </Form.Item>
      <Form.Item
        name="parentCategory"
        label="父类名称"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="pc1">父类1</Option>
          <Option value="pc2">父类2</Option>
          <Option value="pc3">父类3</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button htmlType="button" onClick={onReset}>
          取消
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="" className={styles.main}>
      <div style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }}>
        {Demo()}
        <Spin spinning={loading} size="large" />
      </div>
    </PageHeaderWrapper>
  );
};
