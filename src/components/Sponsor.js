import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";

const Sponsor = () => {

    let [sponsor,setSponsor]=useState({})
    let [loding,setloding] = useState(true)

    useEffect(()=>{
        async function spon(){
            let sponData = await axios.get("https://bwfc-api.vercel.app/sponsor")
            setSponsor(sponData.data)
            setloding(false)
        }
        spon()
    },[])

    if (loding){
        return
    }

  return (
    <section className="my-40">
        <Container>
            <h4 className="text-center mt-32 text-22px font-manFont">{sponsor.title}</h4>
            
            <div className="justify-between mt-9 mx-14 flex">
                {sponsor.logos.map((titem,index)=>(
                    <img key={index} src={titem.src}/>
                ))}
            </div>
            
        </Container>
    </section>
  );
};

export default Sponsor;
