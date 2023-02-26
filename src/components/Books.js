import { useGetBooksQuery } from "../app/services/jsonServerApi"

export default function Books() {
  const {data,isError,isLoading} = useGetBooksQuery();
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
        </li>
      ))}
    </ul>
  );
}
