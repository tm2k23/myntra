import {Navbar , Breadcrumb} from './components/index.js';
import {Modal} from './containers/index.js';
import {HomePage , ProductPage} from './pages/index.js';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  const {
      modals
  } = useSelector(state => ({
      modals : state.modalsStore,
  }));
  return (
    <div className="App" >
      <BrowserRouter>
        {modals.isActive && <Modal/>}
        <Navbar/>
        <Breadcrumb/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:productID" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
