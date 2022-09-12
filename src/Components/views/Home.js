import React, {useState, useEffect} from 'react';

function Home(){
    const [data, setData] = useState([]);
  const [id, setId]= useState('');
  

useEffect(() => {
  const loadData = async () => {
    await fetch(`https://swapi.dev/api/people/${id}/`)
    .then((response) => response.json())
    .then((ReceivedData) => setData(ReceivedData));
    }
loadData()
},[id]);

  return (
    <div className="py-5 container">
    <h2 className="text-center">Please Insert number in the below from 1 - 83.</h2>      
    <input type="text"className="form-control" name="starwars" value={id} onChange={(e) => setId(e.target.value)} />
  <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Height</th>
        <th scope="col">Mass</th>
        <th scope="col">Hair Color</th>
        <th scope="col">Eye Color</th>
      </tr>
    </thead>
    <tbody>
      <tr key={data.name}>
        <th scope="row">{data.name}</th>
        <td>{data.height}</td>
        <td>{data.mass}</td>
        <td>{data.hair_color}</td>
        <td>{data.eye_color}</td>
      </tr>
    </tbody>
  </table>
</div>
  );
}


export default Home