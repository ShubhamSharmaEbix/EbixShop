import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { Routes, Route, useLocation } from 'react-router';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import AdminPanel from './pages/AdminPanel';


function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">
      {
        pathname!=='/admin'?
      (<Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/men' element={<CategoryPage category={'men'}/>}/>
          <Route path='/women' element={<CategoryPage category={'women'}/>}/>
          <Route path='/jewelery' element={<CategoryPage category={'jewelery'}/>}/>
          <Route path='/electronics' element={<CategoryPage category={'electronics'}/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
      </Layout>):
        <Routes>
          <Route path='/admin' element={<AdminPanel/>}/>
        </Routes>
      }
    </div>
  )
}

export default App
