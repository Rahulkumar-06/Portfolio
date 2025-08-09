import './App.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Prehome from './Components/prehome';

function App() {

  const rourer = createBrowserRouter([{
    path : '/home',
    element : <Home/>
  },
  {
    path : '/',
    element : <Prehome/>
  }
]);

  return (
    <>
      <RouterProvider router={rourer}></RouterProvider>
    </>
  )
}
export default App;
