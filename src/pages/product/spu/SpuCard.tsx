import { Card, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import React from 'react';
import { Spu } from './Spu';

const namespace = 'productSpus';

const mapStateToProps = (state: {}) => {
  return state;
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteSpu: (sid: number) => {
      dispatch({
        type: `${namespace}/deleteSpu`,
        payload: sid,
      });
    },
  };
};

function SpuCard(props: { spu: Spu; deleteSpu: (sid: number) => void }) {
  const { spu } = props;
  const { name, desc } = spu;

  return (
    <Card
      title={name}
      actions={[
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => {
            props.deleteSpu(spu.id);
          }}
          onCancel={() => {}}
        >
          <DeleteOutlined key="delete" />
        </Popconfirm>,
      ]}
    >
      {desc}
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SpuCard);
