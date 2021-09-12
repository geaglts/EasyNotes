import { useContext } from 'react';
import { Context } from '../Context';
import { TextareaHTMLAttributes } from 'react';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';

import { RenderCss } from '../types';

import '../styles/Components/Input.scss';

interface InputPropsNew extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  Icon?: JSX.Element;
}

function Input(props: InputPropsNew) {
  const { darkTheme } = useContext(Context);
  const { Icon, ...rest } = props;
  return (
    <div
      className={`Input ${darkTheme ? 'Dark' : ''}`}
      style={inputDarkStyles(darkTheme)}
    >
      <div className="Input__Icon">{Icon || <MdSentimentVeryDissatisfied />}</div>
      <textarea className="Input__TextArea" {...rest}></textarea>
    </div>
  );
}

const inputDarkStyles: RenderCss = (darkTheme) => {
  if (darkTheme) {
    return {};
  }
  return {};
};

export default Input;
