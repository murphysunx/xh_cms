import React from 'react';

import { Col, Row } from 'antd';

function groupCards(array: JSX.Element[], subGroupLength: number): JSX.Element[][] {
  let index = 0;
  const newArray = [];

  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }

  return newArray;
}

interface Props {
  cards: JSX.Element[];
}

export const GridCanvas = (props: Props) => {
  const cardsPerRow = 3;
  const { cards } = props;
  const groupedCards = groupCards(cards, cardsPerRow);
  const gridCards = groupedCards.map((cardGroup, rowIdx) => {
    const row = cardGroup.map((card, colIdx) => {
      return (
        <Col xs={8} sm={8} md={8} lg={8} xl={8} key={`catCardRowCol-${rowIdx}-${colIdx}`}>
          {card}
        </Col>
      );
    });
    return (
      <Row gutter={16} key={`catCardRow-${rowIdx}`}>
        {row}
      </Row>
    );
  });

  return (
    <div className="container">
      <div className="site-card-wrapper">{gridCards}</div>
    </div>
  );
};
