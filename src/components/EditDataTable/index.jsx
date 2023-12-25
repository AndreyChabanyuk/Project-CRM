import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './../useFetch/index'
import EditDataTableForm from "../EditDataTableForm";
import Navmenu from "../Navmenu";
import { serverPath } from '../../helpers/serverPath';
import { Link } from 'react-router-dom';


const EditDataTable = () => {

  const {id} = useParams()
  const {data, setData} = useFetch(serverPath + id)


  useEffect(()=>{
		document.body.className = "with-nav"
	},[])


  return (
    <>
  
     <Navmenu />
      
      <div className="form-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой</div>
            </div>
            <div className="col text-right">
              <Link to="/table" className="btn btn-link">
                Вернуться назад
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">

                <EditDataTableForm  data={data} setData={setData}/>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EditDataTable;
