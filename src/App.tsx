import { useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Main from './component/Main/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App
