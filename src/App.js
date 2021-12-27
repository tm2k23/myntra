import {Navbar , Breadcrumb} from './components/index.js';
import {Modal} from './containers/index.js';
import {HomePage , ProductPage} from './pages/index.js';
function App() {
  return (
    <div className="App" >
      <Modal/>
      <Navbar/>
      <Breadcrumb/>
      <HomePage/>
      {/* <ProductPage/> */}
    </div>
  );
}
export default App;
