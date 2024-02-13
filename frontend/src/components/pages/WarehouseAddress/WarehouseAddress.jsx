// @ts-nocheck
import React, { useState } from "react";
import useFetch from "../../../ApiClient/GetApi";
import { PostApi } from "../../../ApiClient/PostApi";
import { Loader2 } from "../../loader/Loader";
import { error_toaster, success_toaster } from "../../toaster/Toaster";


import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";



export default function WarehouseAddress() {

    const {data,reFetch} = useFetch("get_warehouse_address");
    const [suggestions, setSuggestions] = useState([]);
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [country, setCountry] = useState("")
    const [language, setLanguage] = useState("")
    const [loading,SetLoading] = useState(false)

    async function handleInput(e) {
        const input = e.target.value;
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(regions)&key=AIzaSyBT3JsPzZXXXhlUHLAIkY9REQeZIJ9Lheo`);

        const data = await response.json();
        const results = data.predictions.map(prediction => prediction.description);
        setSuggestions(results);
    }

    const selectAddress = (data) => {
        setAddress(data);
        setSuggestions([])
    }

    const add_warehouse_address = async () => {
        if (address === "") {
            error_toaster("Address is required!");
            return false;
        }
        if (city === "") {
            error_toaster("City is required!");
            return false;
        }
        if (state === "") {
            error_toaster("State is required!");
            return false;
        }
        if (zip === "") {
            error_toaster("Zip Code is required!");
            return false;
        }
        if (country === "") {
            error_toaster("Country is required!");
            return false;
        }
        if (language === "") {
            error_toaster("Language is required!");
            return false;
        }
        SetLoading(true)
        const res = await PostApi("add_warehouse_address",{
            address:address,
            city:city,
            state:state,
            zip:zip,
            country:country,
            language:language
        });
        if(res.data.status ==="1")
        {
            SetLoading(false);
            setAddress("");
            setCity("");
            setCountry("");
            setZip("");
            setCountry("");
            success_toaster(res.data.message);
            reFetch();
        }
        else
        {
            SetLoading(false);
            error_toaster(res.data.message)
        }
    }
    const inputStyle =
        "bg-white w-1/2 border-none font-normal text-xl px-5 py-3 rounded-lg placeholder:text-black placeholder:text-opacity-40 focus:outline-none";
    return (
        <>
            <Leftbar />
            <Topbar main="Warehouse Address" extend={false} />
            <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
                <h1 className="font-bold sm:text-5xl text-4xl">Add Warehouse Address</h1>
                <div className="flex justify-between">
                <span className="text-themeBlue"> <p className="text-lg font-semibold">Address in English</p> <p>{data?.data?.english?.address}</p><p>{data?.data?.english?.city}</p><p>{data?.data?.english?.state}</p><p>{data?.data?.english?.zipCode}</p><p>{data?.data?.english?.country}</p></span>
                <span className="text-themeBlue"> <p className="text-lg font-semibold">Address in Chines</p> <p>{data?.data?.chines?.address}</p><p>{data?.data?.chines?.city}</p><p>{data?.data?.chines?.state}</p><p>{data?.data?.chines?.zipCode}</p><p>{data?.data?.chines?.country}</p></span>
                </div>
            {
                loading?<Loader2/>: <div className="space-y-4">
                <div className="flex  gap-y-4 gap-x-4 ">
                       {/* <div className="relative w-full"> */}
                       <input
                           // value={address}
                           type="name"
                           onChange={(e) => setAddress(e.target.value)}
                           name="firstName"
                           placeholder="Address"
                           className={inputStyle}
                       />
                       {/* <div className="absolute bg-transparent p-6 space-y-2 my-4">
                           {suggestions.map(suggestion => <div onClick={()=>selectAddress(suggestion)} className="cursor-pointer" key={suggestion}>{suggestion}</div>)}
                           </div> */}
                       {/* </div> */}
   
                       <input
                           type="name"
                           name="lastName"
                           onChange={(e) => setCity(e.target.value)}
                           placeholder="City"
                           className={inputStyle}
                       />
                   </div>
                   <div className="flex  gap-y-4 gap-x-4 ">
                       <input
                           type="name"
                           onChange={(e) => setState(e.target.value)}
                           name="firstName"
                           placeholder="State"
                           className={inputStyle}
                       />
                       <input
                           type="name"
                           onChange={(e) => setZip(e.target.value)}
                           name="firstName"
                           placeholder="Zip Code"
                           className={inputStyle}
                       />
                   </div>
                   <div className="flex  gap-y-4 gap-x-4 ">
   
                       <input
                           type="name"
                           name="lastName"
                           onChange={(e) => setCountry(e.target.value)}
                           placeholder="Country"
                           className={inputStyle}
                       />
                     <select className={inputStyle} onChange={(e)=>setLanguage(e.target.value)}>
                        <option>Select Language</option>
                        <option value="en">English</option>
                        <option value="ch">Chines</option>
                     </select>
                   </div>
                   <div className="flex justify-end">
                       <button onClick={add_warehouse_address} className="bg-themeBlue py-2 px-6 rounded border border-themeBlue text-white hover:text-themeBlue hover:bg-white cursor-pointer">Save Address</button>
                   </div>
                </div>
            }
            </section>
        </>
    )
}
