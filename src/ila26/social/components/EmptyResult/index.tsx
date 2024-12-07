import React from 'react';
import { Container, Label } from './styles';
import { Search } from '~/icons';
import { FormattedMessage } from 'react-intl';

const EmptyResult = () => {
  return (
    <Container>
      <Search width="48px" height="48px" color="lightgray" />
      <Label>
        <FormattedMessage id="EmptyResult" />
      </Label>
    </Container>
  );
};

export default EmptyResult;
