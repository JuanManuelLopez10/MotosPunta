import './App.scss';
import CartContextProvider from './context/CartContext';

import Ap from './Ap';


function App() {

  return (
    <CartContextProvider>
      <Ap/>
    </CartContextProvider>
  );
}

export default App;
