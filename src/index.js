import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/home';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import AddPlant from './views/AddPlant/addplant';
import UpdatePlant from './views/updateplant/UpdatePlant.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/add",
    element:<AddPlant/>
  },
  {
    path:"/update/:ID",
    element:<UpdatePlant/>
  },
  {
    path:"*",
    element:<h1>404 Not Found</h1>
  }
])
root.render(<RouterProvider router={router}/>);


