import React from 'react'

export default function House(props){
    return(
        <div>
        <h3>House</h3>
            <div style={{background:'rgb(225, 232, 228)',width:'80vh',height:'200px'}}>
                <h4>{props.name}</h4>
                <h4>{props.address}</h4>
                <h4>{props.city}</h4>
                <h4>{props.state}</h4>
                <h4>{props.zip}</h4>
                <button style={{float:'right'}} onClick={()=> props.deleteHouse(props.id)}>Delete</button>
            </div>
        </div>
    )
}