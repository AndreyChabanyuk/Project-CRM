import { serverPath } from "../../helpers/serverPath";

const DeleteData = (id) => {
    const res = confirm('Вы уверены, что хотите удалить заявку?')
    if(res){
        fetch(serverPath + "array/" + id, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
        }).then(()=> {
        })
    }
}
 
export default DeleteData;