import React from 'react';

import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import ProdUnitCard from './prodUnitCard';
import GridCanvas from '../category/gridCanvas';

const namespace = 'product_units';

const mapStateToProps = (state) => {
  const unitList = state[namespace].data;
  return {
    unitList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryProductUnits`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductUnitCanvas extends React.Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    const cards = this.props.unitList.map((unit) => {
      return <ProdUnitCard {...unit} />;
    });

    return (
      <PageHeaderWrapper>
        <GridCanvas cards={cards} />
      </PageHeaderWrapper>
    );
  }
}
