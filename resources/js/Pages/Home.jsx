import React from 'react'
import Nav from '../Layouts/Nav'
 
export default function Home({data}) {

console.log(data);

    return (
    <div className='container-fluid'>
      <br /> 
    <div className="card mt-5 p-0">
      <div className="card-body " >
       <table className='table table-striped'>
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th colSpan={2}>Options</th>
          
        </tr>
        </thead>
        <tbody>
         
          {data.map(item=>(
         <tr>
            <td>{item.id}</td>
            <td>Junaid</td>
            <td role='col'>{item.body}</td>
            <td><button className='btn btn-warning btn-sm'>Edit</button></td>
            <td><button className='btn btn-danger btn-sm'>Delete</button></td>
          </tr>
          
          ))}
          
        </tbody>
       </table>
      </div>
    </div>


        
    </div>


  )
}
// Home.layout = page => <Nav children={page}/>

// export default Home; 