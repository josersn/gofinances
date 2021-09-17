import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text `
    color: ${({ theme }) => theme.colors.attention};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    margin-bottom: 6px;
`