import { RouterProvider } from "react-router-dom";
import { routers } from "./layouts/routes";
import './App.css';
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { authContext } from "./contexts/AuthProvider";

const router = routers;


axios.defaults.baseURL =
  'http://localhost:3001/';
// axios.defaults.headers.common['authorization']= localStorage.getItem('token')
// axios.interceptors.request.use(req => {
  //   // console.log(req);
  //   return req;
// })
// // Add a 401 response interceptor
// window.axios?.interceptors.response.use(function (response) {
  //   console.log(response.status);
  //   if (response.status === 401 || response.status === 402 || response.status === 403) {
    //     return console.log('status code error')
    //   }
//   console.log('waiting for response return');
//   return response;
// })
  // function (error) {
//   console.log('I am inside of error');
//   if (401 === error.response.status || 402 === error.response.status || 403 === error.response.status) {
//     console.log('401 LISTEN FROM AXIOS');
//     toast.error('UNAUTHORIZED USER NAVIGATING TO LOGIN')
//       // swal({
  //       //     title: "Session Expired",
//       //     text: "Your session has expired. Would you like to be redirected to the login page?",
//       //     type: "warning",
//       //     showCancelButton: true,
//       //     confirmButtonColor: "#DD6B55",
//       //     confirmButtonText: "Yes",
//       //     closeOnConfirm: false
//       // }, function(){
  //       //     window.location = '/login';
  //       // });
  //   } else {
    //       return Promise.reject(error);
    //   }
    // });
    
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
    // <Elements stripe={stripePromise}>
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router}/>
      </div>
      // </Elements> 
  );
}

export default App;
