import { useState } from "react";
import FormData from './../FormData/index'
import { randomData } from "../../helpers/randomData";
import { serverPath } from "../../helpers/serverPath";

const RandomRequest = () => {
  
  const [user, setUser]  = useState(randomData());


  const newTestData = () => {
    setUser(randomData());
  }
   

  const eventListeners = (e) => {
    e.preventDefault();
 
      const newObj = {
        ...user,
          data:new Date().toLocaleString('ru-RU',{
          timeZone: 'Europe/Samara'
        })

      }

      fetch(serverPath + "array/",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newObj)
      }).then((res)=>{
        res.ok && newTestData()
        
      })

  };


  return (
    <div className="container-fluid">
      <div className="white-plate__header text-center">
        <p className="white-plate__logo">
          <span>Форма</span> заявок
        </p>
      </div>
      <div className="white-plate__line-between white-plate__line-between--main"></div>
      { 
      <FormData 
        user={user}
        setUser={setUser}
        eventListeners={eventListeners}
      />
      } 
    </div>
  );
};


export default RandomRequest;
