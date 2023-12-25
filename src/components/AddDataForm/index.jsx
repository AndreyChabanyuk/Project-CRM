import { useEffect } from 'react'
import Navmenu from "../Navmenu";
import RandomRequest from "../RandomRequest";



const AddDataForm = () => {
  
  
  useEffect(()=>{
    document.body.className = "with-nav radial-bg flex-center"
  },[])

  return (
    <>

        <Navmenu />

      <div className="white-plate white-plate--payment">

        <RandomRequest />

      </div>

    </>
  );
};


export default AddDataForm;