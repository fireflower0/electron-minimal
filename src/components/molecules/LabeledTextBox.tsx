import React from 'react';
import TextBox from '../atoms/TextBox';
import Label from '../atoms/Label';

interface IFProps {
  labelText: string;
  value: string;
  setValue: (value: string) => void;
}

const LabeledTextBox: React.FC<IFProps> = props => {
  return (
    <div>
      <Label labelText={props.labelText} />
      <TextBox value={props.value} setValue={props.setValue} />
    </div>
  );
};

export default LabeledTextBox;
