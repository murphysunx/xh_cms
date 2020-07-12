import React from 'react';

import { Col, Row } from 'antd';

function group(array, subGroupLength) {
  let index = 0;
  const newArray = [];

  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }

  return newArray;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let GridCanvas;
export default GridCanvas = (props) => {
  // console.log("gird canvas's props");
  // console.log(props);
  const cardsPerRow = 3;
  const { cards } = props; // 解构语法不熟悉
  // console.log("cards to grid");
  // console.log(cards);
  const groupedCards = group(cards, cardsPerRow);
  const gridCards = groupedCards.map((cardGroup) => {
    const row = cardGroup.map((card) => {
      return (
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          {card}
        </Col>
      );
    });
    return <Row gutter={16}>{row}</Row>;
  });

  return (
    <div className="container">
      <div className="site-card-wrapper">{gridCards}</div>
    </div>
  );
};
