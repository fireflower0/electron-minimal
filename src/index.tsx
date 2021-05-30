import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import LabeledTextBox from './components/molecules/LabeledTextBox';
import Button from './components/atoms/Button';

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
  const [sw, setSw] = useState('off');

  const buttonStyle1 = {
    width: '100px',
    height: '30px',
    color: 'white',
    backgroundColor: 'green',
  };

  const buttonStyle2 = {
    width: '100px',
    height: '30px',
    color: 'white',
    backgroundColor: 'red',
  };

  return (
    <FormWrapper>
      <LabeledTextBox labelText="Name" value={text} setValue={setText} />
      Your name is {text} !
      <div>
        {sw === 'on' ? (
          <Button
            labelText="ON"
            styles={buttonStyle1}
            onClick={() => setSw('off')}
          />
        ) : (
          <Button
            labelText="OFF"
            styles={buttonStyle2}
            onClick={() => setSw('on')}
          />
        )}
      </div>
    </FormWrapper>
  );
};

const container = document.getElementById('contents');

render(<App />, container);
