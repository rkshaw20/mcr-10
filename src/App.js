import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';
import Departments from './pages/Departments';
import Products from './pages/Products';
import AddNewProduct from './pages/AddNewProduct';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {index:true,element:<Dashboard/>},
      {path:'/departments',element:<Departments/>},
      {path:'/products',element:<Products/>},
      {path:'/products/:department',element:<Products/>},
      {path:'/addNewProduct',element:<AddNewProduct/>}
    ]
  }
])

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;
