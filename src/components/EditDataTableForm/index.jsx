import {Link} from 'react-router-dom'
import DeleteData from './../DeleteData/index';
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { serverPath } from '../../helpers/serverPath';


const EditDataTableForm = ({}) => {


    const [user, setUser] = useState('')
    const {id} = useParams()

    
    
    useEffect(()=>{
        fetch(serverPath +"array/"+ id,{
            method:'GET',
            headers: {"Content-Type": "application/json"},
        }).then((res)=> {
          return  res.json()
        }).then((data)=>{
            setUser(data)
        });
    },[])

    
    const Saved = () => {
        
        fetch(serverPath +"array/" + id,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(user)
        })
        .then(()=>{
                setUser(user)
            
           
          })
    }
    
   


  return (
    
    
       <form id="form" action="" >
        <div className="card mb-4">
          <div className="card-header">Данные о заявке</div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>ID:</strong>
              </div>
              <div className="col">
                Заявка №<span id="number">{user.id}</span>
              </div>
              <input name="id" type="hidden" id="id" />
            </div>
  
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Дата создания:</strong>
              </div>
              <div className="col" id="date">
              {user.data}
              </div>
            </div>
  
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Продукт:</strong>
              </div>
              <div className="col">
                <select
                  id="product"
                  name="product"
                  className="custom-select"
                  value={user.product || ''}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      product: e.target.value,
                    });
                  }}
                >
                  <option value="course-html">Курс по верстке</option>
                  <option value="course-js">Курс по JavaScript</option>
                  <option value="course-vue">Курс по VUE JS</option>
                  <option value="course-php">Курс по PHP</option>
                  <option value="course-wordpress">Курс по WordPress</option>
                </select>
              </div>
            </div>
  
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Имя:</strong>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={user.name || ''}
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setUser({
                      ...user,
                   name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
  
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Email:</strong>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={user.email || ''}
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setUser({
                      ...user,
                    email: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Телефон:</strong>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={user.phone || ''}
                  id="phone"
                  name="phone"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      phone: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
  
            <div className="row mb-3">
              <div className="col-md-2">
                <strong>Статус заявки:</strong>
              </div>
              <div className="col">
                <select
                  className="custom-select"
                  id="status"
                  name="status"
                  value={user.status || ''}
                  onChange={(e) => {
                    setUser({
                      ...user,
                      status: e.target.value,
                    });
                  }}
                >
                  <option value="">Выберите...</option>
                  <option value="new">Новая</option>
                  <option value="inwork">В работе</option>
                  <option value="complete">Завершена</option>
                </select>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row justify-content-between">
          <div className="col text-right">
            <Link to={"/table"}>
            <button onClick={()=>{DeleteData(user.id)}} className="btn btn-primary btn-delete">
              Удалить
            </button>
            <button onClick ={()=>{Saved()}} type="submit" className="btn btn-primary">
              Сохранить изменения
            </button>
            </Link>
          </div>
        </div>
      </form>
    

  );
};

export default EditDataTableForm;
