import axios from "axios";
import React, { useState } from "react";

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
    <section className="mt-24 relative">
        <img className="absolute top-[-20px] z-z1" src={featureData.featureShape}/>
        <div className="container mx-auto flex">
            <div className="w-6/12"><img src={featureData.featureImage}/></div>
            <div className="w-6/12">
                <h4 className="text-primary text-lg font-manFont font-extrabold">{featureData.subTitle}</h4>
                <h2 className="font-manFont font-bold text-50px leading-l_h56 tracking-tighter mt-6 mb-9">{featureData.title}</h2>
                <p className="text-second text-lg font-manFont mb-7">{featureData.paragraph}</p>
                <a href="#" className="py-4 px-9 bg-primary font-manFont font-bold text-white  rounded-3xl border border-primary inline-block items-center hover:bg-transparent hover:text-primary transition ease-in-out delay-150">{featureData.button.text}</a>
            </div>
        </div>
    </section>
  );
};

export default Feature;
