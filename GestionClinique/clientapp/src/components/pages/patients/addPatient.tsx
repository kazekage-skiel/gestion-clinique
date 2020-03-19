import React from "react";


class Patient {
    id: number;
    lname: string;
    fname: string;
    age: number;
    genre: number;
    height: number;
    weight: number;
    birthDate: Date;
    isHospitalise: boolean;


    constructor();

    constructor(id?:number,lname?:string,fname?:string,age?:number,height?:number,weight?:number,birthdate?:string,isHospitalise?:boolean) {
        this.id = 0;
        this.lname = "";
        this.fname = "";
        this.age = 0;
        this.genre = 0;
        this.height = 0;
        this.weight = 0;
        this.birthDate = new Date();
        this.isHospitalise = false

    }
    
    

}


interface IProps {

}


interface IState {

    patient: Patient
    debug:string

}


export default class AddPatientForm extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props)
        this.state = {
            patient: new Patient(),
            debug: ''
        }
        
        this.handleFname=this.handleFname.bind(this)
        this.saveUser=this.saveUser.bind(this)
    }

    /*function to handle form*/

    handleLname=(event:any)=> {
        event.persist()
        this.setState(prevstate=>{
            let patient=Object.assign({},prevstate.patient)
            patient.lname=event.target.value
            return {patient}
        })
      
    } 
    handleFname=(event:any)=>{
       
        event.persist();
        this.setState(prevstate=>{
           let patient=Object.assign({},prevstate.patient)
            patient.fname=event.target.value
            return {patient}
        })
        
    }
    
    handleGender=(event:any)=>{
        event.persist()
        this.setState(patientState=>{
            let patient=Object.assign({},patientState.patient)
            patient.genre=event.target.value
            return {patient}
        })
    }

    handleAge=(event:any)=>{
        event.persist()
        this.setState(patientState=>{
            let patient=Object.assign({},patientState.patient)
            patient.age=event.target.value
            return {patient}
        })
    };
    
    handleHeight=(event:any)=>{
        event.persist()
        this.setState(patientState=>{
            let patient=Object.assign({},patientState.patient)
            patient.height=event.target.value
            return {patient}
        })
    }
    handleWeight=(event:any)=>{
        event.persist()
        this.setState(patientState=>{
            let patient=Object.assign({},patientState.patient)
            patient.weight=event.target.value
            return {patient}
        })
    }

    handleBirthDate=(event:any)=>{
        event.persist()
        console.log(event.target.value)
        this.setState(patientState=>{
            let patient=Object.assign({},patientState.patient)
            patient.birthDate=event.target.value
            return {patient}
        })
    }
    handleFileUpload=(event:any)=>{
        event.persist()
    }
    
    /*end of handling the event*/
    saveUser(event:any) {
       alert(this.state.patient.birthDate)
        event.preventDefault()
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="body">
                        <h2 className="card-inside-title">
                            formulaire d'ajout de patien
                        </h2>
                        <form  encType={"multiform/data"} onSubmit={this.saveUser}>
                            <div className="row clearfix">
                                <div className="col-sm-6">
                                    <input className={"form-control"} type="text" value={this.state.patient.lname} onChange={this.handleLname} placeholder={"Nom du patient"}/>
                                </div>
                                <div className="col-sm-6">
                                    <input className={"form-control"} type="text" value={this.state.patient.fname} onChange={this.handleFname}  placeholder={"Prénom du patient"}/>
                                </div>
                            </div>
                            {/*Second row*/}
                            <div className="row clearfix my-3">
                                <div className="col-sm-6">
                                    <input className={"form-control"} value={this.state.patient.age} onChange={this.handleAge} type="number" placeholder={"Votre âge"}/>
                                </div>
                                <div className="col-sm-6">
                                    <select className={"form-control"} onChange={this.handleGender}>
                                        <option value="0">Veuillez selectionner votre genre</option>
                                        <option value="1">Homme</option>
                                        <option value="2">Femme</option>
                                    </select>
                                </div>
                            </div>
                            {/*third row*/}
                            <div className="row clearfix my-3">
                                <div className="col-sm-6">
                                    <input className={"form-control"} value={this.state.patient.height} onChange={this.handleHeight} type="number" placeholder={"Taille du patient"}/>

                                </div>
                                <div className="col-sm-6">
                                    <input className={"form-control"} type="number" value={this.state.patient.weight} onChange={this.handleWeight} placeholder={"Poids du patient"}/>
                                </div>
                            </div>
                            {/*fourth row*/}
                            <div className="row clearfix">
                                <div className="col-sm-6">
                                    <input className={"form-control"} type="date"  onChange={this.handleBirthDate} placeholder={"Choisir la date de naissance du client"}/>
                                </div>
                                <div className="col-sm-6">
                                    <input className={"form-control"} type="file"
                                           placeholder={"Choisir la photo du patient (Optionnel)"}/>
                                </div>
                            </div>
                            {/*last part*/}
                            <div className="row clearfix my-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Requiert une hospitalisation ?
                                    </label>
                                </div>
                            </div>

                            <input type={"submit"} className={"btn btn-raised btn-primary btn-round waves-effect"}
                                   value={"Enregistrer le patient"}/>
                        </form>

                    </div>
                </div>
            </>
        )
    }
    
}