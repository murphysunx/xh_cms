import React from 'react';
import { connect } from 'dva';
import { Form, Select } from 'antd';
import { GlobalModelState } from '@/models/type/global';
import { Dispatch } from 'umi';
import { Category } from '../Category';

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
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryProductCategories`,
      });
    },
  };
};

interface Props {
  onDidMount(): Function;
  catList: Category[];
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ParentCatFormItem extends React.Component<Props, any> {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const cats = this.props.catList.map((cat) => {
      const { name, id } = cat;
      return <Option value={id}>{name}</Option>;
    });
    // the option for not having any parent cat
    const nullOption = <Option value="null">null</Option>;
    const catOptions = [nullOption].concat(cats);

    return (
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
    );
  }
}
