import React from "react";
import axios from "axios";



class Patient{
    private id:number;
    private lname:string;
    private fname:string;
    private age:number;
    private genre:number;
    private height:number;
    private weight:number;
    private birthDate:string;
    private isHospitalise:boolean;
    
    constructor(){
        this.id=0
        this.lname=" "
        this.fname=""
        this.age=0
        this.genre=0
        this.height=0
        this.weight=0
        this.birthDate=""
        this.isHospitalise=false
        
    }
    
    
}


interface ComponentState {
    patient:Patient
    queryParams:string
    patientFound:boolean
}


interface Props {
    
}

export default  class AddConsultationComponent extends React.Component<Props,ComponentState>{
    
    constructor(props:any){
        super(props)
        let _patient=new Patient();
        this.state={
           patient:_patient,
            queryParams:"",
            patientFound:false
        }
    }
    
    
    /*function part*/
    
    /*function to handle the research of an user*/
    handleSearchBox=(event:any)=>{
        var query=event.target.value
        this.setState({
            queryParams:query
        })
       
    }
    
    handleSearch=(event:any)=>{
        axios
            .get('/searchPatient?q='+this.state.queryParams)
            .then(success=>{
                if (success.data.code!=null){
                    this.setState({
                        patientFound:true
                    })
                }else{
                    this.setState({
                        patientFound:false
                    })
                }
            })
            .catch(failure=>{
                
            })
       
     event.preventDefault()
    }
    
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
                                 <li className="breadcrumb-item">
                                     <a href="/">
                                         <i className="zmdi zmdi-home"></i> Consultations
                                     </a>
                                 </li>
                                 <li className="breadcrumb-item">
                                     <a href="/">
                                         <i className="zmdi zmdi-home"></i> Ajout
                                     </a>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="container-fluid">
                     <div className="row clearfix">
                         <div className="col-lg-12 col-md-12 col-sm-12">
                             <div className="alert alert-warning" role="alert">
                                 <strong>L'ajout d'une consultation necessite tout d'abord l'ajout d'un patient.
                                     Si se patient existe vous serez redirigé automatiquement
                                    vers la page de consultation dans le cas contraire il vous sera proposé d'ajouter le patient
                                 </strong>
                             </div>
                             <div className="card">
                                 <div className="body">
                                     <form onSubmit={this.handleSearch} >
                                         <h2 className="card-inside-title">Rechercher le patient</h2>
                                         <div className="row clearfix">
                                             <div className="col-sm-12">
                                                 <div className="input-group mb-3">
                                                     <div className="input-group-append">
                                                         <span className="input-group-text">
                                                             <i className="zmdi zmdi-search"></i>
                                                         </span>
                                                     </div>
                                                     <input type="text" className="form-control" onChange={this.handleSearchBox} placeholder="Veuillez saisir le nom du patient"/>
                                                 </div>
                                             </div>
                                         </div>
                                         <button type="submit"
                                                 className="btn btn-raised btn-primary btn-round waves-effect">Rechercher
                                         </button>
                                     </form>
                                   
                                 </div>
                             </div>
                             {/*research result*/}
                             
                           
                             <div className="card">
                                 <div className="body">
                                     <div className="header">Resultats de la recherche</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </>
        )
    }
    
    
}
