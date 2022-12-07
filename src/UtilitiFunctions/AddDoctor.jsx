import axios from "axios";
import toast from "react-hot-toast";

export const addDoctor = doctor => {
    axios.post('/add_doctor', {
        headers: {
            "content-type": "application/json",
            authorization:`bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify(doctor)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('DOCTORS ADDED SUCCESSFULLY')
        })
    .catch(err=>toast.error(err.message))
}