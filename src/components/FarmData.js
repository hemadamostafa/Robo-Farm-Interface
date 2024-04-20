import { ref, onValue } from "firebase/database";
import database from "../util/firebase";
import { useEffect, useState } from "react";

const FarmData = () => {
  // State to store farm data
  const [farmData, setFarmData] = useState(null);

  useEffect(() => {
    // Reference to the 'farm' node in the database
    const farmRef = ref(database, 'FarmData');

    // Listen for changes in the data at the 'farm' node
    onValue(farmRef, (snapshot) => {
      const data = snapshot.val();
      // Update the state with the fetched data
      setFarmData(data);
    });
  }, []);

  return (
    <div className='row m-auto' style={{ width: "370px" }}>
      <div className='col-md-6'>
        <p>Temperature: {farmData?.temp}</p>
        <p>Humidity: {farmData?.humidty}</p>
      </div>
      <div className='col-md-6'>
        <p>Ammonia: {farmData?.ammonia}</p>
        <p>Air Quality: {farmData?.gas}</p>
      </div>
    </div>
  );
};

export default FarmData;
