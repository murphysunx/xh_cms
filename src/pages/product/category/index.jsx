import React from 'react';

import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import CatCard from './catCard';
import GridCanvas from './gridCanvas';
import CollectionsPage from './FormInModal';

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
export default class ProductCategoryCanvas extends React.Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const cards = this.props.catList.map((cat) => {
      return <CatCard {...cat} />;
    });

    return (
      <PageHeaderWrapper>
        <CollectionsPage />
        <GridCanvas cards={cards} />
      </PageHeaderWrapper>
    );
  }
}
