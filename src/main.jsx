import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ComponentTests from './pages/ComponentTests';
import store from './store'
import { Provider } from 'react-redux'
import Unauthenticated from './components/Unauthenticated';
import Login from './pages/Login';
import Home from './pages/Home';
import Authenticated from './components/Authenticated';
import Register from './pages/Register';
import Dashboard from "./pages/Home/Dashboard/index.jsx";
import Crops from './pages/Home/Crops/index.jsx';
import CropRecommendation from './pages/Home/CropRecommendation/index.jsx';
import Landingpage from './pages/LandingPage/index.jsx'; 
import Disease from './pages/Home/Disease/index.jsx';
import DiseaseExplanation from './pages/Home/DiseaseExplanation/index.jsx';
import Soil from './pages/Home/Soil/index.jsx';

const router = createBrowserRouter([
  {
    path: "/components-tests",
    element: <ComponentTests/>,
  },
  {
    path: '/login',
    element: <Unauthenticated><Login/></Unauthenticated>
  },
  {
    path: '/register',
    element: <Unauthenticated><Register/></Unauthenticated>
  },
  {
    path: "/",
    element: <Landingpage/>
  },
  {
    path: '/home',
    element: <Authenticated><Home /></Authenticated>,
    children: [
      {
        path: '/home',
        element: <Dashboard />
      },
      {
        path: '/home/crops',
        element: <Crops/>
      },
      {
        path: '/home/crops-recommendation',
        element: <CropRecommendation/>
      },
      {
        path: '/home/Disease-detection',
        element: <Disease/>,
      },
      {
        path: '/home/DiseaseExplanation',
        element: <DiseaseExplanation/>
      },
      {
        path: '/home/Soil',
        element: <Soil/>
      }
    
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
