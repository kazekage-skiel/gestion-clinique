import React, {Children} from "react";



const PlaceHolder:React.FC=(props:any)=>{
    return(
        <section className={"content"}>
            <div className="body_scroll">
                {props.children}
            </div>
         
        </section>
    )
}
export default PlaceHolder
