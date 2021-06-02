import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateUser } from '../../actions/user';
import { State } from '../../states/state';
import User from '../../states/user';
import LabeledTextBox from '../molecules/labeledTextbox';
import Button from '../atoms/button';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #263238;
`;

const Home: React.FC = () => {
  const { name, count } = useSelector<State, User>(v => v.user);
  const dispatch = useDispatch();

  const onChangeName = (userName: string) => {
    dispatch(updateUser({ name: userName }));
  };

  const onChangeCount = () => {
    dispatch(updateUser({ count: count + 1 }));
  };

  const buttonStyle = {
    width: '100px',
    height: '30px',
    color: 'white',
    backgroundColor: 'green',
  };

  return (
    <FormWrapper>
      <div>
        <LabeledTextBox
          labelText="ユーザ名"
          value={name}
          setValue={onChangeName}
        />
        <p>{name}</p>
        <Button labelText="訪問" styles={buttonStyle} onClick={onChangeCount} />
        <p>{count}</p>
      </div>
    </FormWrapper>
  );
};

export default Home;
