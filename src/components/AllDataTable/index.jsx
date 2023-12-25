import {Link} from 'react-router-dom'



const AllDataTable = ({el}) => {
  

  const products = {
    'course-html':'Курс по верстке',
    'course-js':'Курс по JavaScript',
    'course-vue':'Курс по VUE',
    'course-php':'Курс по PHP',
    'course-wordpress':'Курс по WordPress',

  }

  const statuses = {
 
    'new':'Новый',
    'inwork':'В работе',
    'complete':'Завершена'
  }

  const badges = {
  
    new: 'badge-danger',
    inwork: 'badge-warning',
    complete: 'badge-success'
  }



  return (
    <>
        <tr key={el.id}>
          <th scope="row">{el.id}</th>
          <td>{el.data}</td>
          <td>{products[el.product]}</td>
          <td>{el.name}</td>
          <td>{el.email}</td>
          <td>{el.phone}</td>
   
          <td>
            <div className={`badge badge-pill ${badges[el.status]}`} >{statuses[el.status]}</div>
          </td>
          <td>
            <Link to={`/edit/${el.id}`} >
            Редактировать
           </Link>
          </td>
        </tr>
    </>
  );
};

export default AllDataTable;
