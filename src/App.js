import './App.css';
import Input from '@mui/material/Input';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';

function App() {
  const ariaLabel = { 'aria-label': 'description' };
  const [inputList, setInputList] = useState('');



  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const addClick = () => {
    console.log("+ is clicked")
  }

  return (
    <div className='alphaDiv'>
      <div className='betaDiv'>
        <h1 className='heading'>ToDo List</h1>
        <div>
          <Input placeholder="Add your Items" inputProps={ariaLabel} value={inputList} onChange={itemEvent} />
          <AddCircleOutlineTwoToneIcon onClick={addClick} />
        </div>
        <div className='showItems'>
          <ul>
            <li> <HighlightOffIcon /> test item</li>
            <li>test item</li>
            <li>test item</li>
            <li>test item</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;
