import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <Link to="/" className="logo">Jagdish</Link>
            <div className="header-right">
                <Link className="active" to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
} 