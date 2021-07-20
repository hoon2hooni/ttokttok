
import { ChangeEvent, FC, useState } from 'react';
import image from './cardi2.png';

interface Iprops  {
  name?: string;
  age?: number;
  backgroundColor?: string;
  color?: string;
  displayArgs: {};
}

const Door: FC<Iprops> = ({ name, age, backgroundColor, color, displayArgs}) => {
  console.log(image);
  const [memo, setMemo] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMemo(value);
    console.log(value);
  }
  console.log(backgroundColor);
  return (
    <div style={{ backgroundColor,color, ...displayArgs}}>
      <label htmlFor={name}> {name} </label>
      <h2> 이사람의 나이는 {age} 입니다. </h2>
      <textarea className={name} onChange={handleChange} value={memo} style={{ cursor: './cardi2.png, auto'}}/>
    </div>
    
  )
}

export default Door;
  