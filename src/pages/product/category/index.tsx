import React from 'react';

import { connect } from 'dva';
import { Dispatch } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { CategoryState } from '@/models/type/category';
import { GlobalModelState } from '@/models/type/global';

import CatCard from './catCard';
import { GridCanvas } from './gridCanvas';
import CollectionsPage from './FormInModal';
import { Category } from './Category';

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

interface Props extends CategoryState {
  onDidMount: Function;
  catList: Category[];
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductCategoryCanvas extends React.Component<Props, any> {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const cards = this.props.catList.map((cat) => {
      return <CatCard cat={cat} key={`catCard-${cat.id}`} />;
    });

    return (
      <PageHeaderWrapper>
        <CollectionsPage />
        <GridCanvas cards={cards} />
      </PageHeaderWrapper>
    );
  }
}
