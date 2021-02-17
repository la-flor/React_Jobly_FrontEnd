import React from "react";
import Card from "react-bootstrap/Card";

const CompanyCard = ({companyName, jobDescription}) => {

    return (
        <Card.Body>
        <Card.Title>{companyName}</Card.Title>
        <Card.Text>
        {jobDescription}
        </Card.Text>
        </Card.Body>
    )
}

export default CompanyCard;