import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";
import Button from "./layout/Button";

const Finance = () => {

    let [financeData, setFinanceData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function data() {
            let fiData = await axios.get(
                "https://bwfc-api.vercel.app/finance"
            );
            setFinanceData(fiData.data);
            setloding(false);
        }
        data();
    }, []);

    if (loding) {
        return;
    }


  return (
    <section className=" mt-28">
    <Container>
    <div className="flex">
    <div className=" w-3/4">
    <Title text={financeData.sunbTitle}/>
    <Heading text={financeData.heading}/>
    <Paragraph className={"w-[512px]"} text={financeData.paragraph}/>
    <Button>{financeData.button.text}</Button>
    </div>
    <div className=" w-3/4 flex justify-center">
    <img src={financeData.image}/>
    </div>
    </div>
    </Container>
    </section>
  )
};

export default Finance;
