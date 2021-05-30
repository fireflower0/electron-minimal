import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import LabeledTextBox from './components/molecules/LabeledTextBox';

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

  const [text, setText] = useState('');

  return (
    <FormWrapper>
      <LabeledTextBox labelText="Name" value={text} setValue={setText} />
      Your name is {text} !
    </FormWrapper>
  );
};

const container = document.getElementById('contents');

render(<App />, container);
