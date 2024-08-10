import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Home({ dataa, error }) {
              // variable ,function, method, error, process
  const { data: formData, setData, post, errors, processing } = useForm({
    body: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    post('/posts', {
      onSuccess: () => {
        setData('body', ''); // Clear the form input on success
      },
      onError: (error) => {
        // For debugging purposes
        console.log(error);
      }
    });
  };


  const { delete: deleteItem } = useForm();

  const handleDelete = (id,e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this post?')) {
     
      deleteItem(`/posts/${id}`, {
        onSuccess: () => {
          // Inertia.visit('/posts');
          // Optionally, you can force a reload or redirect to ensure the list updates
          // Inertia.reload({ only: ['data'] }); // Reload the page with fresh data
        },
        onError: (error) => {
          console.log('Deletion error:', error); // Log errors if any
        }
      });
    }
   
  };




  return (
    <div className='container-fluid'>


  {/* Bootstrap Modal */}
  <div
                className="modal fade"
                id="createPostModal"
                tabIndex="-1"
                aria-labelledby="createPostModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createPostModalLabel">
                                Update Post
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form //</div>onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <label htmlFor="postBody" className="form-label">
                                        Post Content
                                    </label>
                                    <input
                                        type="text"
                                        id="postBody"
                                        className="form-control"
                                        // value={formData.body}
                                        // onChange={(e) => setFormData({ body: e.target.value })}
                                        placeholder="Enter post content"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


{/* model end */}



      <br />
      <div className="card mt-5 p-0">
        <div className="card-body">
          <form onSubmit={handleSubmit} className='row'>
            <div className='form-group col-10'>
              <input 
                type="text" 
                value={formData.body}
                onChange={(e) => setData('body', e.target.value)}  
                 
                className='form-control' 
                placeholder='Enter Description' 
              />
              {/* Display validation errors */}
              {errors.body && <div className="text-danger">{errors.body}</div>}
            </div>
            <div className="form-group col-2">
              <button className='btn btn-success' disabled={processing}>Submit</button>
            </div>
          </form>

          {!error ?
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
                {dataa.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>Junaid</td>
                    <td>{item.body}</td>
                    <td><button data-bs-toggle="modal"
                data-bs-target="#createPostModal"
                 className='btn btn-warning btn-sm'>Edit</button></td>
                    <td>
                      <form onSubmit={(e)=>handleDelete(item.id,e)}>
                      <input type="hidden" name="_method" value="delete" />
                      <button className='btn btn-danger btn-sm' type='submit'>Delete</button>
                      </form>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
            : <h4 className='text-center text-danger'> No data found</h4>
          }
        </div>
      </div>
    </div>
  );
}
