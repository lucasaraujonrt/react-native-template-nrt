import React, { ReactNode } from 'react';
import * as S from './Row.styles';

interface IRow {
  children: ReactNode;
  pdTop?: number;
  pdBottom?: number;
  pdLeft?: number;
  pdRight?: number;
}

const Row = ({ children, pdBottom, pdLeft, pdRight, pdTop }: IRow) => {
  return (
    <S.Row pdTop={pdTop} pdBottom={pdBottom} pdLeft={pdLeft} pdRight={pdRight}>
      {children}
    </S.Row>
  );
};

export default Row;
