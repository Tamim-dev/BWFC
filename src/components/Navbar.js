import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaAngleDown} from 'react-icons/fa'

const Navbar = () => {

    let [navberData,setNavberData] = useState({})
    let [loding,setloding] = useState(true)

    useEffect (()=>{
        async function nav(){
            let navData = await axios.get("https://bwfc-api.vercel.app/navbar")
            setNavberData(navData.data)
            setloding(false)
        }
        nav()
    },[])

    if(loding){
        return
    }

  return (
    <div className='container mx-auto'>
        <div className='flex items-center h-14 mt-7'>
            <div className='w-3/12 flex'><img src={navberData.logo}/></div>
            <div className='w-[41%] flex justify-center'>
                <ul className=' flex items-center justify-center gap-20 font-manFont font-bold text-sm'>
                    {navberData.navItems.map(titem=>(
                        <li key={titem.item} className='hover:text-primary transition ease-in-out delay-150 relative group'>{titem.item} 
                        {titem.dropDownItem && 
                            <>
                                <FaAngleDown className='absolute top-1 -right-3.5'/>
                                <div>
                                    <ul className='absolute invisible group-hover:visible rounded-xl'>
                                        {titem.dropDownItem.map(nitem=>(
                                            <li key={nitem.dropItem} className='w-32 h-14 font-manFont bg-white drop-shadow-md pt-5 pl-5 '>{nitem.dropItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        }
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-[34%] gap-2 flex justify-end'>
                {navberData.buttonOne.visibility && 
                    <a href='#' className='font-manFont text-sm font-semibold py-4 px-9 hover:bg-primary hover:text-white rounded-lg transition ease-in-out delay-150'>{navberData.buttonOne.text}</a>}
                {navberData.buttonTwo.visibility && 
                    <a href='#' className='bg-primary text-white font-manFont text-sm font-semibold py-4 px-9 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150'>{navberData.buttonTwo.text}</a>}
                {navberData.buttonThree.visibility &&
                    <a href='#' className='bg-primary text-white font-manFont text-sm font-semibold py-4 px-9 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150'>{navberData.buttonThree.text}</a>}
            </div>
        </div>
        
    </div>
    
  )
}

export default Navbar