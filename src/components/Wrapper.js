import S from 'styled-components';

// align-items: 가로정렬
// justify-content: 세로정렬

export const Center = ({ flex }) => S.View`
  flex:${flex};
  align-items: center
  justify-content: center
`;
export const FlexStart = ({ flex }) => S.View`
  flex:${flex};
  align-items: flex-start
  justify-content: flex-start
`;
