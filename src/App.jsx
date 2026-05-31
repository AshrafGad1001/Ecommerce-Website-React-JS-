import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout/Layout';
import { NotFound } from './componets/NotFound/NotFound';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import { Hero } from './componets/hero/Hero';
import Products from './componets/Products/Products';
import { Men } from './componets/Men/Men';
import Women from './componets/Women/Women';
import Categories from './componets/Categories/Categories';
import Clothes from './componets/Clothes/Clothes';
import Electronics from './componets/Electronics/Electronics';
import SmartAccessories from './componets/SmartAccessories/SmartAccessories';
import Laptop from './componets/Laptop/Laptop';
import Mobile from './componets/Mobile/Mobile';
import UserContextProvider from './Context/userContext';
import { Gallery } from './componets/gallery/Gallery';
import RoutingGuards from './componets/RoutingGuards/RoutingGuards';
import ProductDetails from './componets/ProductDetails/ProductDetails';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "", element: <Layout />, children: [
  //       { path: "", element: <Hero /> },
  //       { path: "home", element: <Home /> },
  //       { path: "about", element: <About /> },
  //       { path: "gallery", element: <Gallery /> },
  //       { path: "services", element: <Services /> },
  //       { path: "contact", element: <Contact /> },
  //       { path: "login", element: <Login /> },
  //       { path: "register", element: <Register /> }
  //     ]
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ]);

  // const router = createBrowserRouter([
  //   {
  //     path: "", element: <Layout />, children: [
  //       { path: "", element: <Hero /> }, 
  //       {
  //         path: "Projects", element: <Projects />, children: [
  //           { path: "web", element: <WebProjects /> },
  //           { path: "mobile", element: <MobileProjects /> },
  //         ],

  //       },
  //       { path: "login", element: <Login /> },
  //       { path: "register", element: <Register /> }
  //     ]
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />
  //   }
  // ]);






  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Hero /> },
        { path: "gallery", element: <Gallery /> },


        { path: "Products", element: <RoutingGuards><Products /></RoutingGuards> },

        { path: "Products/ProductDetails/:id", element: <RoutingGuards><ProductDetails /></RoutingGuards> },

        {
          path: "Categories", element: <Categories />, children: [
            {
              path: "clothes", element: <Clothes />, children: [
                { path: "men", element: <Men /> },
                { path: "women", element: <Women /> }
              ],
            },
            {
              path: "electronics", element: <Electronics />, children: [
                { path: "mobile", element: <Mobile /> },
                { path: "laptops", element: <Laptop /> },
                { path: "SmartAccessories", element: <SmartAccessories /> }
              ]
            }
          ]
        },
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
        <RouterProvider router={router} ></RouterProvider>
      </UserContextProvider>
    </>
  )
}

export default App
