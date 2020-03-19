import React from "react";
import axios from "axios";
import SickPatientList from "./sub/existingPatientList";
import AddPatient from "../patients/addPatient";
import AddPatientForm from "../patients/addPatient";





class Patient {
     id:number;
     lname:string;
     fname:string;
     age:number;
     genre:number;
     height:number;
     weight:number;
     birthDate:string;
    isHospitalise:boolean;


    constructor() {
        this.id=0;
        this.lname="";
        this.fname="";
        this.age=0;
        this.genre=0;
        this.height=0;
        this.weight=0;
        this.birthDate="";
        this.isHospitalise=false
        
    }
    
    
}


interface ComponentState {
    patientList:[],
    patient:Patient,
    queryParams:string
    patientFound:number
}


interface Props {
    
}

export default  class AddConsultationComponent extends React.Component<Props,ComponentState>{
    
    constructor(props:any){
        super(props)
        
        this.state={
            patient:new Patient(),
            
            queryParams:"",
            patientFound:0,
            patientList:[]
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
    
    
     async fetchPatient(){
        let response=  await axios.get('/searchPatient?q='+this.state.queryParams)
         return response.data
       
      
    }
     handleSearch=(event:any)=>{
      
       this.fetchPatient().then(success=>{
           if (success.length>0){
               this.setState({
                   patientFound:1,
                   patientList:success
               }) 
           }else{
               this.setState({
                   patientFound:-1,
               })
           }
          
       })
           .catch(failure=>{
               this.setState({
                   patientFound:0
               })
           })
         
         
        event.preventDefault()
    }
    
    render(){
        
        const renderList=()=>{
            if (this.state.patientFound ==1){

                return (
                    <>
                        <div className="alert alert-success text-center" role="alert">
                            <strong>
                                Des utilisateurs correspondant au profil ont été trouvé
                            </strong>
                        </div>
                        <SickPatientList patient={this.state.patientList}/>
                        
                    </>
                  
                )  
               
            }else if (this.state.patientFound==-1){
               return (
                   <>
                       <div className="alert alert-danger" role="alert">
                           <strong>
                               Aucun patient n'a été pré-enregistré pour une consultation avec ce nom
                               Le formulaire d'ajout de patient va s'afficher de suite
                           </strong>
                       </div>
                       <AddPatientForm/>
                   </>
               )
              
            }
        }
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
                                         <button 
                                             type="submit" className="btn btn-raised btn-primary btn-round waves-effect">Rechercher
                                         </button>
                                     </form>
                                   
                                 </div>
                             </div>
                             {/*research result*/}
                            {renderList()}
                           
                             
                         </div>
                     </div>
                 </div> 
             </>
        )
    }
    
    
}
