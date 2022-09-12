import React, {useEffect, useState} from 'react'

function Product() {
  const [data, setData] = useState([]);
  const [id, setId]= useState('');

  

useEffect(() => {
  const loadData = async () => {
    const requests = Array.from({ length: parseInt(id) / 10 }, (_, i) =>
      fetch(`https://swapi.dev/api/people/?page=${i + 1}`)
    );
    const responses = await Promise.all(requests);
    const promises = responses.map((response) => response.json());
    const output = await Promise.all(promises);
    setData(output.map((o) => o.results)?.flatMap((arr) => arr));
  };
loadData()
},[id]);
   return(
    <div className="py-5 container">
          <h3>Character list</h3>
    <h2 className="text-center">Dropdown showing some list from 1-10, 1-50 and 1-60.</h2>      
    <div className='p-3'>
    <select type="text" className="form-select form-select-sm p" name="starwars" value={id} onChange={(e) => setId(e.target.value)}>
    <option selected >1</option>
    <option >50</option>
    <option >60</option>
    </select> 
    </div>
    {data.map((datas,index)=>(
    <div className="p-5" style={{width:"18rem",justifyItems:'center'}} key={index}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item " style={{fontWeight:'bold'}}>Name : {datas.name}</li>
    <li className="list-group-item">Mass : {datas.mass}</li>
    <li className="list-group-item">Hair color : {datas.hair_color}</li>
    <li className="list-group-item">Eyes color : {datas.eye_color}</li>
  </ul>
</div>
    ))}
</div> 
    )
}

export default Product