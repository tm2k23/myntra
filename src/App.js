import {Navbar , Breadcrumb} from './components/index.js';
import {HomePage , ProductPage} from './pages/index.js';
function App() {
  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      {/* <HomePage/> */}
      <ProductPage/>
    </div>
  );
}
export default App;
