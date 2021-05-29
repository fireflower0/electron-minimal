import React, { useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #263238;
`;

const App = () => {
  useEffect(() => {
    document.title = 'My Electron App';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#263238';
  }, []);

  return <FormWrapper>Hello, world!</FormWrapper>;
};

const container = document.getElementById('contents');

render(<App />, container);
