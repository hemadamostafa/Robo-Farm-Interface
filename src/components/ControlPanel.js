import { ref, onValue } from "firebase/database";
import database from "../util/firebase";
import { useEffect, useState , set} from 'firebase/database';

const ControlPanel = () => {

  const Reset = () => {
    const newValue = 1; // Set your new value here
    const farmRef = ref(database, 'Trigger/Situation');
    set(farmRef, newValue)
      .then(() => {
        console.log('Value updated successfully');
      })
      .catch((error) => {
        console.error('Error updating value:', error);
      });
  };

  return (
      <div className='m-auto w-50'>
        <button className='btn btn-success btn-block d-block w-75 m-auto'>Start</button>
        <button className='btn btn-primary btn-block d-block w-75 m-auto' onClick={Reset}>Another Cycle</button>
        <button className='btn btn-danger btn-block d-block w-75 m-auto'>Stop!</button>
    </div>
  )
}

export default ControlPanel