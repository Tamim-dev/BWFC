import React from "react";
import Container from "./layout/Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Flax from "./layout/Flax";
import Button from "./layout/Button";

const Account = () => {

  let [accountData,setaccountdata] = useState({})
  let [loding,setloding] = useState (true)

  useEffect (()=>{
    async function acc(){
        let accData = await axios.get("https://bwfc-api.vercel.app/account")
        setaccountdata(accData.data)
        setloding(false)
    }
    acc()
  },[])

  if(loding){
    return
  }

  return (
    <section>
        <Container>
        <Flax>
        <div className="w-3/6">
            <h4>{accountData.subTitle}</h4>
            <h3>Hello Tamim</h3>
            <h2>{accountData.title}</h2>
            <p>{accountData.paragraph}</p>
            <Button>{accountData.button.text}</Button>
        </div>
        <div className="w-3/6">
            <img src={accountData.accountImage}/>
        </div>
        </Flax>
        </Container>
    </section>
  );
};

export default Account;
