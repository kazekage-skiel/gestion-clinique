import React from "react";


const SickPatientList=(props:any)=>{
  
    const list=props.patient.map((patient,index)=>
        <div>
            <h4>{patient.fname}</h4>
        </div>
    )
    return(
        <div className="card">
            <div className="body">
                <div className="header">Resultats de la recherche</div>
                {props.patient}
            </div>
        </div>
    )
}
export default SickPatientList
