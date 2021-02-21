import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';
import logo from "../logos/logo1.png";

const CompanyCard = ({handle, name, description}) => {

    return (
        <Link to={`/companies/${handle}`}>
            <div className="CompanyCard my-4 p-4">
                {<img src={logo}
                        alt={name}
                        width="75px"
                        className="float-right ml-5" />}
                <div className="CompanyCard-handle card-title">{name}</div>
                <p>
                {description}
                </p>
            </div>
        </Link>
    )
}

export default CompanyCard;