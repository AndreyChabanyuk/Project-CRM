import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AddDataForm from "../AddDataForm";
import TableData from "../TableData";

import EditDataTable from "../EditDataTable";



function App() {
  return (
    <Router>
     

          <Routes>
            <Route path="/" element={<AddDataForm />} />
            <Route path="/table" element={<TableData />} />
            <Route path="/edit/:id" element={<EditDataTable />} />
          </Routes>
        
     
    </Router>
  );
}

export default App;
