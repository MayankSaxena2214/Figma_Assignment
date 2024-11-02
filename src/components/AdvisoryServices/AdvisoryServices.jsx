import React from 'react'
import "./AdvisoryServices.css"
import advisory1 from "../../assets/advisory1.png"
import advisory2 from "../../assets/advisory2.png"
import advisory3 from "../../assets/advisory3.jpg"
import advisory4 from "../../assets/advisory4.png"
import SecretoryCard from '../SecretoryServices/SecretoryCard'
import AdvisoryCard from './AdvisoryCard'
import { Zoom } from 'react-awesome-reveal'
const AdvisoryServices = () => {

    const item1=["Assisting businesses in securing capital from public and private markets.","Includes IPOs, debt issuance, and private equity."];
    const item2=["Strategic guidance during mergers and acquisitions.","Services include target identification, valuation, and negotiation."];
    const item3=["Support through mergers, demergers, buybacks, and financial restructuring.","Guidance on investment strategies for optimal business growth."];
    const item4=["Support through mergers, demergers, buybacks, and financial restructuring.","Market trend analysis and competitor insights.","Market trend analysis and competitor insights.","Advising on joint ventures, exit strategies, and long-term growth planning."];
  return (
    <div className="advisory-services-container">
        <div className="advisory-heading">Investment Banking & Capital Advisory Services</div>
        <div className="advisory-card-container">
            <Zoom><AdvisoryCard  heading={"Fundraising"} image={advisory1} item={item1}/>
            </Zoom>
            <Zoom><AdvisoryCard heading={"M&A Advisory"} image={advisory2} item={item2}/>
            </Zoom>
            <Zoom><AdvisoryCard heading={"Corporate Finance"} image={advisory3} item={item3}/>
            </Zoom>
            <Zoom><AdvisoryCard heading={"Restructuring &Strategic Advisory"} image={advisory4} item={item4}/>
            </Zoom>
        </div>
    </div>
  )
}

export default AdvisoryServices