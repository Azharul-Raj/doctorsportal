import axios from "axios"

    // add user function
export  const addUser = (user) => {
    axios.post(`users?name=${user?.name}`, {
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
      .then(res => console.log(res.data))
      // .then(data => console.log(data))
    .catch(err=>console.error(err))
  }
