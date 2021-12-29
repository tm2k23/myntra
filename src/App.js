import {Navbar } from './components/index.js';
import {Modal,SimilarProductsContainer} from './containers/index.js';
import {HomePage , ProductPage} from './pages/index.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import {Page404} from './components/index.js';
function App() {
  const { modals , similarProducts } = useSelector(state => ({
      modals : state.modalsStore,
      similarProducts : state.similarProductsStore
  }));
  return (
    <div className="App" >
      <BrowserRouter>
        {similarProducts.isActive && <SimilarProductsContainer/>}
        {modals.isActive && <Modal/>}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:productID" element={<ProductPage/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
