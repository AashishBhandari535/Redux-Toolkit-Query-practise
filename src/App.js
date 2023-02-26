import Books from "./components/Books";
import {Routes,Route} from 'react-router-dom'
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/createBook" element={<CreateBook />} />
      <Route path="/updateBook/:id" element={<UpdateBook />} />
    </Routes>
  );
}

export default App;
