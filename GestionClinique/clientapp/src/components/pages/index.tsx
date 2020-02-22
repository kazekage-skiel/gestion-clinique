import React from "react";

export default class DashBoardIndex extends React.Component{
    
    render(){
       return(
           <>
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6">
                        <h2>Dashboard</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">
                                    <i className="zmdi zmdi-home"></i> Acceuil
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
               <div className="container-fluid">
                   <div className="row clearfix">
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="card widget_2 big_icon traffic">
                               <div className="body">
                                   <h6>Consultation</h6>
                                   <h2>20 <small className="info">of 1Tb</small></h2>
                                   <small>2% higher than last month</small>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-12">
                           <div className="card widget_2 big_icon sales">
                               <div className="body">
                                   <h6>Hospitalisation</h6>
                                   <h2>12% <small className="info">of 100</small></h2>
                                   <small>6% higher than last month</small>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </>
       )
    }
}