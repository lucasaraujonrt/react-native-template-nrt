import React from 'react';
import * as S from './Background.styles';

interface IBackground {
  children: React.ReactNode;
  backgroundColor?: string;
  scrollView?: boolean;
}

const Background = ({ backgroundColor, children, scrollView }: IBackground) =>
  scrollView ? (
    <S.ScrollView backgroundColor={backgroundColor}>{children}</S.ScrollView>
  ) : (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );

export default Background;
