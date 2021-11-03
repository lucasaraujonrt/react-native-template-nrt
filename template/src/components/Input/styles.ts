import styled from 'styled-components/native';

interface IProps {
  showBorder: boolean | null;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  border-color: ${({ showBorder }: IProps) =>
    showBorder ? ({ theme }) => theme.colors.primary : 'transparent'};
`;
