import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useCreateBookMutation} from '../app/services/jsonServerApi'

export default function CreateBook() {
  const navigate = useNavigate();
  const [addNewBook,response] = useCreateBookMutation();
  console.log(response);
  const [info,setInfo] = useState({
    name:'',
    author:''
  })
  const callbn = async (e) => {
    try{
         e.preventDefault();
         const data={...info};
         setInfo({
           name: "",
           author: "",
         });
         await addNewBook(data);
         navigate('/');
    }catch(err) {
      alert(err)
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white  shadow-lg">
          <h3 className="text-2xl font-bold text-center">Add a Book</h3>
          <form onSubmit={callbn}>
            <div className="mt-4">
              <div>
                <label htmlFor="name" className="block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="name"
                  value={info.name}
                  onChange={(e) =>
                    setInfo({ ...info, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  placeholder="Author"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  name="author"
                  value={info.author}
                  onChange={(e) =>
                    setInfo({ ...info, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" disabled={response.isLoading ? true : false}>
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
