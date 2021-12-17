import {Navbar} from './components/index.js';
import {ProductContainer,FilterContainer} from './containers/index.js';
function App() {
  return (
    <div>
      <Navbar/>
      <FilterContainer/>
      <ProductContainer/>
    </div>
  );
}

export default App;
