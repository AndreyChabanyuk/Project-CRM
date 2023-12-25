import {useState,useEffect} from 'react'
import { serverPath } from '../../helpers/serverPath';


const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
  fetch(serverPath)
  .then((res) => {
    return res.ok && res.json();
  })
  .then((data) => {
    setData(data);
  });
},[])
    return  {data, setData}
};

export default useFetch;
