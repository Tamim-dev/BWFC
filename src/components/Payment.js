import axios from "axios";
import React, { useState } from "react";

const Payment = () => {

    let [paymentData,setpaymentData]=useState({})
    let [loding,setloding] = useState(true)

    useState (()=>{
        async function pay(){
            let payData = await axios.get('https://bwfc-api.vercel.app/payment')
            setpaymentData(payData.data)
            setloding(false)
        }
        pay()
    },[])

    if(loding){
        return
    }

  return(
    <section className="mt-16 relative">
        <img className="absolute top-[-20px] right-10" src={paymentData.paymentShape}/>
        <div className="container mx-auto bg-third rounded-3xl px-16 py-[75px]">
            <div className="w-6/12">
            <h4 className="text-primary text-lg font-manFont font-extrabold">{paymentData.subTitle}</h4>
            <h2 className="w-[565px] font-manFont font-bold text-50px leading-l_h56 tracking-tighter mt-6 mb-9">{paymentData.title}</h2>
            <p className="text-second text-lg font-manFont mb-7">{paymentData.paragraph}</p>
            </div>
            <div className="w-6/12"></div>
        </div>
    </section>
  );
};

export default Payment;
