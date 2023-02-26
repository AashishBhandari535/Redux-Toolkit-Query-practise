import Books from "./components/Books";
import {Routes,Route} from 'react-router-dom'
import CreateBook from "./components/CreateBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/createBook" element={<CreateBook/>}/>
    </Routes>
  );
}

export default App;
