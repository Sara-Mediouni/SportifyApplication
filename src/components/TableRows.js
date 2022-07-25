
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {id,nom,categorie,logo,noment,gouvern,adresse}= data;
            return(

                <tr key={index}>
                <td>
               <input type="text" value={id} onChange={(evnt)=>(handleChange(index, evnt))} name="fullName" className="form-control"/>
                </td>
                <td><input type="text" value={nom}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={categorie}  onChange={(evnt)=>(handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                <td><input type="text" value={noment}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={gouvern}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={ adresse}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={logo}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
               
                <td>  <a class="delete" title="Delete" data-toggle="tooltip"onClick={()=>(deleteTableRows(index))}><DeleteIcon/></a>
                <a class="edit" title="Edit" data-toggle="tooltip"><EditIcon/></a></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;