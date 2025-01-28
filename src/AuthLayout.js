import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Protected({children}) {

    const navigate = useNavigate()

    useEffect(() => {

        if (typeof window !== "undefined") {
            try{
                if (localStorage.getItem("token")) {
                    console.log('Token found')
                }else{
                    navigate("/signin")
                }
            }catch(e){
                return {"error" : "Filter name not found !"};
            }
        }

    }, [])

  return <>{children}</>
}

