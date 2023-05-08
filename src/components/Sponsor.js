import axios from "axios";
import React, { useState } from "react";
import Container from "./layout/Container";
import Flax from "./layout/Flax";

const Sponsor = () => {

    let [sponsor,setSponsor]=useState({})
    let [loding,setloding] = useState(true)

    useState(()=>{
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
            <Flax>
            <div className="justify-between mt-9 mx-14">
                {sponsor.logos.map((titem,index)=>(
                    <img key={index} src={titem.src}/>
                ))}
            </div>
            </Flax>
        </Container>
    </section>
  );
};

export default Sponsor;
