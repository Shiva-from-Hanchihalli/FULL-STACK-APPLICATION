import AddUser from './adduser/AddUser';
import './App.css';
import User from './getuser/User';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateUser from './updateUser/UpdateUser';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path:"/add",
      element:<AddUser />
    },
    {
      path:"/update/:id",
      element:<UpdateUser />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
