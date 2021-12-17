import {Navbar , Breadcrumb} from './components/index.js';
import {ProductContainer,FilterContainer} from './containers/index.js';
function App() {
  return (
    <div>
      <Navbar/>
      <Breadcrumb/>
      <FilterContainer/>
      <ProductContainer/>
    </div>
  );
}

export default App;
