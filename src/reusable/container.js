import React from 'react';
import { Container } from '@material-ui/core';
export default function PaddingContainer(props) {
  return (
    <Container disableGutters style={{ maxWidth: '1500px', ...props.style }}>
      {props.children}
    </Container>
  );
}
