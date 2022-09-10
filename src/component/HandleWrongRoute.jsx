import React from "react";
import { Link } from "react-router-dom";

const HandleWrongRoute =()=>{
    return(
        <>
            <Link to="/" >Home</Link>
            <h2>This page is not Prepared yet</h2>
       </>
    )
}

export default HandleWrongRoute;