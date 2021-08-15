import React from 'react';

import * as S from './Button.styles';

interface IButton {
  width?: number;
  title: string;
  loading?: boolean;
  disabled: boolean;
  icon?: React.ReactNode;
  onPress: () => void;
}

const Button = ({
  width,
  title,
  loading,
  icon,
  disabled,
  onPress,
}: IButton) => {
  return (
    <S.Container>
      <S.Button onPress={onPress} width={width} disabled={disabled}>
        <S.Text>{title}</S.Text>
        {icon && null}
        {loading && <S.Loading animating={loading} />}
      </S.Button>
    </S.Container>
  );
};

export default Button;
