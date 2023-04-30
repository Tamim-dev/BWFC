import axios from "axios";
import React, { useState } from "react";

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
        <div className="container mx-auto">
            <h4 className="text-center mt-32 text-22px font-manFont">{sponsor.title}</h4>
            <div className="flex justify-between mt-9 mx-14">
                {sponsor.logos.map((titem,index)=>(
                    <img key={index} src={titem.src}/>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Sponsor;
