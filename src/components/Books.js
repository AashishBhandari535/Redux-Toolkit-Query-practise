import { useNavigate } from "react-router-dom";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "../app/services/jsonServerApi";

export default function Books() {
  const {data,isError,isLoading} = useGetBooksQuery();
  const [deleteBook,response] = useDeleteBookMutation();

  const navigate = useNavigate();

  const callDel = async e => await deleteBook(e.target.value)
  if(isError)
    return ( <h1>Error</h1> )
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className="flex flex-col bg-blue-600">
      {data?.map((item) => (
        <li key={item.id} className="text-base text-white ">
          <span>{`${item.id}.`}</span>
          <span className="ml-2">{item.name}</span>
          <span className="ml-2">{item.author}</span>
          <button
            className="ml-2 bg-black text-white"
            onClick={callDel}
            disabled={response.isLoading ? true : false}
            value={item.id}
          >
            Delete
          </button>
          <button
            className="ml-2 bg-black text-white"
            onClick={() => navigate(`/updateBook/${item.id}`)}
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
}
