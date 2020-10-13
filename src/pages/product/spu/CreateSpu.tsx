import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { connect } from 'dva';
import { Dispatch } from 'umi';
import { GlobalModelState } from '@/models/type/global';
import { Category } from '../category/Category';
import { Spu } from './Spu';

const spuNamespace = 'productSpus';
const catNamespace = 'productCategories';

const mapStateToProps = (state: GlobalModelState) => {
  const cats = state[catNamespace].data;
  return {
    cats,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addSpu: (spu: Spu) => {
      dispatch({
        type: `${spuNamespace}/addSpu`,
        payload: spu,
      });
    },
  };
};

interface Props {
  cats: Category[];
  visible: boolean;
  addSpu: (spu: any) => void;
}

function CreateSpu(props: Props) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <Button id="spu.create" type="primary" onClick={() => setVisible(true)}>
        New Spu
      </Button>
      <Modal
        visible={visible}
        title="Create Spu"
        okText="Create"
        cancelText="Cancel"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              setVisible(false);
              props.addSpu(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        onCancel={() => setVisible(false)}
      >
        <Form form={form} layout="vertical" name="createSpuForm">
          <Form.Item
            name="spuName"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input the name of spu!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="spuDesc"
            label="Description"
            rules={[
              {
                required: false,
                message: 'Please input the description of spu!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="catId" label="Category" rules={[{ required: true }]}>
            <Select placeholder="Select a category" allowClear>
              {props.cats.map((cat) => (
                <Select.Option value={cat.id}>{cat.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpu);
