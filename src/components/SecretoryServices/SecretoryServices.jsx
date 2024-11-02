import React from 'react'
import "./SecretoryServices.css"
import SecretoryCard from './SecretoryCard'
import secretory1 from "../../assets/secretory1.png"
import secretory2 from "../../assets/secretory2.png"
import secretory3 from "../../assets/secretory3.png"
import secretory4 from "../../assets/secretory4.png"
import secretory5 from "../../assets/secretory5.png"
import secretory6 from "../../assets/secretory6.png"
import secretory7 from "../../assets/secretory7.jpg"
import secretory8 from "../../assets/secretory8.png"
import { Slide } from 'react-awesome-reveal'
const SecretoryServices = () => {
    const item1=["Compliance with Companies Act & regulations","Maintaining statutory registers & records","Board & Meeting Facilitation"];
    const item2=["Mergers & Acquisitions (M&A) compliance","Buybacks, demergers, and spin-offs","Corporate reorganization & liquidation"];
    const item3=["Incorporation of Private, Public, Section 8 companies, and LLPs","Drafting MOA & AOA","License procurement & director registration"];
    const item4=["Compliance audits & secretarial checks","M&A due diligence","Filing and regulatory compliance"];
    const item5=["Share transfers, allotments & certificates","Managing dividends & shareholder disputes"];
    const item6=["SEBI, FEMA, RBI reporting","Industrial licenses & government liaison"];
    const item7=["Drafting contracts & legal documents","Legal opinions on company law","Director duties & compliance advisory"];
    const item8=["Tax planning & CSR compliance","ESOP management","Public issues & private placements"];
  return (
    <div className="secretory-container">
        <h1>Company Secretary Services</h1>
        <div className="secretory-card-container">
            <Slide><SecretoryCard image={secretory1} heading={"Corporate Governance & Compliance"} item={item1}/></Slide>
            <Slide><SecretoryCard image={secretory2} heading={"Corporate Restructuring"} item={item2}/></Slide>
            <Slide><SecretoryCard image={secretory3} heading={"Company Formation & Registration"} item={item3}/></Slide>
            <Slide><SecretoryCard image={secretory4} heading={"Secretarial Audit & Due Diligence"} item={item4}/></Slide>
            <Slide><SecretoryCard image={secretory5} heading={"Shareholder Services"} item={item5}/></Slide>
            <Slide><SecretoryCard image={secretory6} heading={"Regulatory Compliance & Liaison"} item={item6}/></Slide>
            <Slide><SecretoryCard image={secretory7} heading={"Corporate Legal Advisory"} item={item7}/></Slide>
            <Slide><SecretoryCard image={secretory8} heading={"Corporate Finance & Taxation"} item={item8}/></Slide>
        </div>
    </div>
  )
}

export default SecretoryServices