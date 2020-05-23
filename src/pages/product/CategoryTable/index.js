import React from "react";
// import reqwest from "reqwest";
// import { Table } from "antd";
import { connect } from 'dva'
// import styles from "./index.less";
import CategoryCard from './categoryCard'


const namespace = 'product_categories'

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
    return (
      <div>
        <CategoryCard code='新建分类' name='新建分类' />
        {
          this.props.catList.map((cat) => {
            // const { code, name } = cat;
            return (
              <CategoryCard {...cat} />
            );
          })
        }
      </div>
    );
  }
}