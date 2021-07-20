import React from 'react';
import logo from './logo.svg';
import './App.css';
import Door from './components/Door';

interface IUserInfo {
  name: string;
  age: number;
}

function App() {
  const dummyArray: IUserInfo[] = [
    { name: '나미', age: 27 },
    { name: '상훈', age: 26 },
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        {dummyArray.map(({ name, age }) => (
          <Door key={name} name={name} age={age} />
        ))}
      </header>
    </div>
  );
}

export default App;
