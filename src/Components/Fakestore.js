import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Fakestore(){
    const[product,setProduct]=useState([]);
    useEffect(()=>{
          fetch('https://fakestoreapi.com/products?limit=20')
          .then(response=>response.json())
          .then(json=>setProduct(json));    
    });
    return(
        <div>
          <div className='Container'>
             <div className='row'>
                 <div className='col-lg-12'>
                    <div className='table-responsive'>
                      <table className='table table-bordered table-hover'>
                         <thead>
                           <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Description</th>
                              <th>Category</th>
                              <th>Image</th>
                              <th>Rate</th>
                              <th>Count</th>
                           </tr>
                         </thead>    
                         <tbody>
                         {
                          product.map((value,index)=>(
                          <tr>
                             <td>{value.id}</td>
                              <td>{value.title}</td>
                              <td>{value.price}</td>
                              <td>{value.description}</td>
                              <td>{value.category}</td>
                              <td><img src={value.image} className="image" height="100" width="100" /></td>
                              <td>{value.rating.rate}</td>  
                              <td>{value.rating.count}</td>
                          </tr>
                          ))
                    }
            </tbody>
            </table>
            </div>
            </div>
          </div>
            </div>
     </div>
    )
}