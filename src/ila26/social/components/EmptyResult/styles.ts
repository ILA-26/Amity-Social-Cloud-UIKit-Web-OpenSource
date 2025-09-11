import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background: ${({ theme }) => theme.palette.system.background};
`;

export const Label = styled('span')({
  color: 'lightgray',
  margin: '10px 0px',
  fontWeight: 'bold',
});
