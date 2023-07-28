import React from "react";
import Container from "./layout/Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "./layout/Button";
import Heading from "./layout/Heading";
import Title from "./layout/Title";
import Paragraph from "./layout/Paragraph";

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
    <section className=" mt-24">
        <Container>
        <div className="flex">
        <div className="w-3/6">
            <Title text={accountData.subTitle}/>
            <Heading text={accountData.title}/>
            <Paragraph className={'w-[516px]'} text={accountData.paragraph}/>
            <Button>{accountData.button.text}</Button>
        </div>
        <div className="w-3/6">
            <img src={accountData.accountImage}/>
        </div>
        </div>
        </Container>
    </section>
  );
};

export default Account;
