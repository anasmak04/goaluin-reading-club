import { useEffect,useState } from 'react';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
    <div className="container">
   
        {data.map((item) => {
          return (
            <div className="box">
              <div>
              <h1 key={item.id}>{item.title}</h1><br />
            <h2>{item.description}</h2>
              </div>

              <div>
              <FontAwesomeIcon  icon={faTrash} className="icon" />
              </div>
            </div>
          )
        })}
     
    </div>
  )
}

export default Home;