import React from "react";

const View = ({details})=>{

    return details.map(detail=>(

        <tr key={detail.email}>
        <td>{detail.name}</td>
        <td>{detail.email}</td>
        <td>{detail.pwd}</td>
        <td>{detail.contact}</td>
        </tr>

    ))
       
}

export default View;