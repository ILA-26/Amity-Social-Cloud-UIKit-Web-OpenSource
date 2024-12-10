import styled from 'styled-components';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
  backgroundColor: '#fff',
});

export const Label = styled('span')({
  color: 'lightgray',
  margin: '10px 0px',
  fontWeight: 'bold',
});
