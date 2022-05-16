import './App.css';
import ProductList from './components/product-list';
import { CatalogueProvider } from './providers/catalogue';
import { CartProvider } from './providers/cart';

function App() {
  return (
    <div className="App">
       <CatalogueProvider>
           <CartProvider>
               
               <ProductList type="catalogue" bgColor={"red"}>
                    
               </ProductList>
               <ProductList type="cart" bgColor={"yellow"}></ProductList>
           </CartProvider>
       </CatalogueProvider>
    </div>
  );
}

export default App;
