import axios from "axios";

export const updatePayment = (paymentInfo) => {
    axios.post('/payment', {
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(paymentInfo)
    })
        .then(res => res.json())
        .then(data => {
        console.log(data);
    })
}