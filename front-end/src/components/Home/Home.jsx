
import axios from 'axios';
import { useEffect,useState } from 'react';

function Home() {
  const [data, setData] = useState([]);
 
useEffect(() => {
  const getData = async () => {
    const response = await fetch(`http://localhost:7000/api/user/post`);
    const postdata = await response.json();
      console.log(postdata)
    setData(postdata);
  }

  getData();
},[])
  
  return (
    <div>
        {data.map((item) => {
          return (
            <>
            {item.title}
            {item.description}
            </>
          )
        })}
    </div>
  )
}

export default Home;