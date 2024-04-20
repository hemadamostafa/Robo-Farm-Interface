import { ref, onValue } from "firebase/database";
import database from "../util/firebase";
import { useEffect, useState } from "react";


const StreamedVideo = () => {
  // State to store farm data
  const [farmImage, setFarmImage] = useState("");
  
  useEffect(() => {
    // Reference to the 'farm' node in the database
    const farmRef = ref(database, 'Ip');

    // Listen for changes in the data at the 'farm' node
    onValue(farmRef, (snapshot) => {
      const data = snapshot.val();
      // Update the state with the fetched data
      setFarmImage(data);
    });
  }, []);

  return (
    <div className="text-center img-fluid">
      {/*<img  src="https://th.bing.com/th/id/OIP.Xyr9Zw5XAPMmiamYfxaelwHaE8?rs=1&pid=ImgDetMain" className="rounded w-50" alt="There's a problem in the Video" />*/}
      {/*<img src="http://192.168.137.68:81/stream" className="rounded w-50" onError={(e) => { e.target.src = 'https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png'; }} alt="Original Image" />*/}
      {/*<img src={farmImage} className="rounded w-50" onError={(e) => { e.target.src = 'https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png'; }} alt="Original Image" />*/}
      <img src={"http://"+farmImage+":81/stream"} className={"rounded w-50"} alt="Original Image" />
      {/*<img id="stream" src="http://192.168.137.132:81/stream" crossOrigin="" />*/}
    </div>
  )
}

export default StreamedVideo