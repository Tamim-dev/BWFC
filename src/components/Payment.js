import axios from "axios";
import React, { useState } from "react";
import Container from "./layout/Container";

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
            <div className="w-6/12 pl-16">
                <h4 className="text-primary text-lg font-manFont font-extrabold">Get Started for Free</h4>
                <input placeholder="Email Address" className="font-manFont block w-96 h-16 pl-5 rounded-md my-6"/>
                <input type="password" placeholder="Password" className="font-manFont block w-96 h-16 pl-5 rounded-md my-6"/>
                <button className="w-96 font-manFont bg-[#FF7F5C] py-4 rounded-md text-white font-bold text-base hover:bg-[#fb7550]">GET STARTED</button>
            </div>
        </div>
        </Container>
    </section>
  );
};

export default Payment;
