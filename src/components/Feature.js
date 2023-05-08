import axios from "axios";
import React, { useState } from "react";
import Container from "./layout/Container";
import Button from "./layout/Button";
import Flax from "./layout/Flax";

const Feature = () => {

    let [featureData,setfeatureData]= useState({})
    let [loding,setloding] = useState(true)

    useState(()=>{
        async function fea(){
            let feature = await axios.get('https://bwfc-api.vercel.app/feature')
            setfeatureData(feature.data)
            setloding(false)
        }
        fea()
    },[])

    if (loding){
        return
    }
  return(
    <section className="mt-24 relative bg-no-repeat" style={{backgroundImage:`url(${featureData.featureShape})`}}>
        <Container>
        <Flax>
            <div className="w-6/12"><img src={featureData.featureImage}/></div>
            <div className="w-6/12">
                <h4 className="text-primary text-lg font-manFont font-extrabold">{featureData.subTitle}</h4>
                <h2 className="font-manFont font-bold text-50px leading-l_h56 tracking-tighter mt-6 mb-9">{featureData.title}</h2>
                <p className="text-second text-lg font-manFont mb-7">{featureData.paragraph}</p>
                <Button>{featureData.button.text}</Button>
            </div>
        </Flax>
        </Container>
    </section>
  );
};

export default Feature;
