import { RouterProvider } from "react-router-dom";
import { routers } from "./layouts/routes";
import './App.css';
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { authContext } from "./contexts/AuthProvider";

const router = routers;

axios.defaults.baseURL =
  'https://doctorsportal-server.vercel.app';
    
function App() {
  const { user } = useContext(authContext);
  if (user?.uid) {    
    axios.defaults.headers.common['authorization'] = `Berar ${localStorage.getItem('token')}`;
    // interceptors
    axios.interceptors.response.use(function (response) {

      return response;
    }, function (error) {
      if (error.response.status === 401 || error.response.status === 402 || error.response.status === 403) {
        console.log('HEY BRO LOOK');
        toast.error(error.message)
      }
      return Promise.reject(error);
    });
    // interceptors
  }
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router}/>
      </div>
  );
}

export default App;
