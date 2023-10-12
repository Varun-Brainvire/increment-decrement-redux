import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber,userActions} from './actions';


function App() {

  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <div className='quantity'> 
          <button className='quantity-minus' type='button' onClick={ () => {dispatch(decNumber())} }><span>-</span></button>
          <input name='quantity' type='text' value={myState} />
          <button className='quantity-plus' type='button' onClick={() => { dispatch(incNumber()) }} ><span>+</span></button><br></br>

          <button className='fetch_button' onClick={() => {dispatch(userActions())}}>Click here to show data</button>

        </div>
      </div>
    </div>
  );
}

export default App;
