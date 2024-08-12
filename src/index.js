import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
   {
    path:"/blog/:id",
    element:<Detail/>
   }
])
root.render(<RouterProvider router={router}/>
 
);

