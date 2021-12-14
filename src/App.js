import {Navbar , GenderFilter , DiscountFilter} from './components/index.js';
import {ProductContainer} from './containers/index.js';
function App() {
  return (
    <div>
      <Navbar/>
      <GenderFilter/>
      <DiscountFilter/>
      <ProductContainer/>
    </div>
  );
}

export default App;
