import React from 'react';
import { Card, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'dva';

const namespace = 'product_categories';

const mapStateToProps = (state) => {
  // const catList = state[namespace].data;
  // return {
  //   catList,
  // };
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCat: (cid) => {
      dispatch({
        type: `${namespace}/deleteProductCategory`,
        payload: cid,
      });
    },
  };
};

const CatCard = (props) => {
  const { cat } = props;

  const children = cat.catChildren.map((c) => <p>{c.catName}</p>);

  return (
    <Card
      title={cat.catName}
      style={{ width: 300 }}
      actions={[
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => {
            props.deleteCat(cat.catId);
          }}
          onCancel={() => {}}
        >
          <DeleteOutlined key="delete" />
        </Popconfirm>,
      ]}
    >
      {children}
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CatCard);
