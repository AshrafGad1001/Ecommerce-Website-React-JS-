import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { NotFound } from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import UserContextProvider from './Context/userContext';
import CartContextProvider from './Context/cartContext';
import RoutingGuards from './components/RoutingGuards/RoutingGuards';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import { Home } from './components/Home/Home';


function App() {


  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "Products", element: <RoutingGuards><Products /></RoutingGuards> },
        { path: "Products/ProductDetails/:id", element: <RoutingGuards><ProductDetails /></RoutingGuards> },
        { path: "cart", element: <RoutingGuards><Cart /></RoutingGuards> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);



  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
