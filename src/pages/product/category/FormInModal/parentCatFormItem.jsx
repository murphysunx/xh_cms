import React from 'react';
import { connect } from 'dva';
import { Form, Select } from 'antd';

const { Option } = Select;

const namespace = 'product_categories';

const mapStateToProps = (state) => {
  const catList = state[namespace].data;
  return {
    catList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryProductCategories`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ParentCatFormItem extends React.Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const cats = this.props.catList.map((cat) => {
      const { name } = cat;
      return <Option value={name}>{name}</Option>;
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
            required: true,
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
