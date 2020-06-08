import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const NewCatForm = (props) => {
  const cats = props.cats.map((cat) => {
    const { cat_name, cat_id } = cat;
    return <Option value={cat_id}>{cat_name}</Option>;
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
      <Select placeholder="Select a category as parent category" allowClear>
        {catOptions}
      </Select>
    </Form.Item>
  );
};

export default NewCatForm;
