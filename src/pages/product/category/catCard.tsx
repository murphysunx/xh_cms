import React from 'react';
import { Card, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { Dispatch } from 'umi';
import { CategoryState } from '@/models/type/category';
import { findTop3Cats } from './utils';
import { Category } from './Category';

const namespace = 'productCategories';

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteCat: (cid: number) => {
      dispatch({
        type: `${namespace}/deleteProductCategory`,
        payload: cid,
      });
    },
  };
};

interface Props extends CategoryState {
  cat: Category;
  deleteCat: Function;
}

const CatCard = (props: Props) => {
  const { cat } = props;
  const topCats = findTop3Cats(cat.children);
  const children = topCats.map((c) => <p key={`${cat.id}-tc-${c.id}`}>{c.name}</p>);

  return (
    <Card
      title={cat.name}
      style={{ width: 300 }}
      actions={[
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => {
            props.deleteCat(cat.id);
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
