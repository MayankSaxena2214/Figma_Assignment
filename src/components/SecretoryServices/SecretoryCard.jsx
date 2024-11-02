import React from 'react'

const SecretoryCard = ({heading,image,item}) => {
  return (
    <div className="secretory-card">
         <div className="imgsection" style={{ backgroundImage: `url(${image})` }}>
            <div className="img-heading">{heading}</div>
        </div>
        <div className="content-section">
            <ul>
                {
                    item && item.map((element,index)=>{
                        return <li key={index}>{element}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default SecretoryCard