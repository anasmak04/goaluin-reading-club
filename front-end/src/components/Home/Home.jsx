import { useEffect, useState } from 'react';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {

  let navigate = useNavigate();

 const handleclick = () => navigate("./Post")
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:7000/api/user/post`);
      const postdata = await response.json();
      console.log(postdata)
      setData(postdata);
    }

    getData();
  }, [])



  return (
    <div className="container">

      {data.map((item) => {
        return (
          <div className="box">
            <div className="box-content">
              <h1 key={item.id}>{item.title}</h1>
              <h2>{item.description}</h2>

              <h3>  <FontAwesomeIcon icon={faCalendar} className="icone" /> {new Date().toLocaleString() + ''}</h3>
            </div>

            <div>
              <FontAwesomeIcon icon={faTrash} className="icon" />
            </div>



          </div>
        )
      })}

      <button onClick={handleclick}>new post</button>

    </div>
  )
}

export default Home;