// this is a mechanism which is used to protect the pages and the routes.
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { UNSAFE_shouldHydrateRouteLoader, useNavigate } from 'react-router-dom'


export default function Protected({children,  userShouldBeAuthenticated=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState()
    const authStatus = useSelector(state => state.auth.status)

    useEffect( () => {
            if(userShouldBeAuthenticated && !authStatus){
                navigate("/login")
            } else if (!userShouldBeAuthenticated && authStatus){
                navigate("/")
            }
            setLoader(false) 
        }, [authStatus, navigate, userShouldBeAuthenticated]
    )
  
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

