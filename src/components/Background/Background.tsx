import React from 'react';
import * as S from './Background.styles';

interface IBackground {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Background = ({ backgroundColor, children }: IBackground) => (
  <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
);

export default Background;
