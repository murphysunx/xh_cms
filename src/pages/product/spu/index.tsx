import { GlobalModelState } from '@/models/type/global';
import { SpuState } from '@/models/type/spu';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import React, { useEffect } from 'react';
import { Dispatch } from 'umi';
import CreateSpu from './CreateSpu';

import { Spu } from './Spu';
import SpuCard from './SpuCard';

const namespace = 'productSpus';

const mapStateToProps = (state: GlobalModelState) => {
  const spus = state[namespace].data;
  return { spus };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/querySpus`,
      });
    },
  };
};

interface Props extends SpuState {
  onDidMount: Function;
  spus: Spu[];
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function SpuPage(props: Props) {
  useEffect(() => {
    props.onDidMount();
  }, []);

  const { spus } = props;
  const spuCards = spus.map((spu) => <SpuCard spu={spu} key={`spuCard-${spu.id}`} />);

  return (
    <PageHeaderWrapper>
      <CreateSpu />
      {spuCards}
    </PageHeaderWrapper>
  );
});
