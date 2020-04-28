import React, {SyntheticEvent} from "react";
import logo from './../../public/assets/images/logo.svg'
import axios from "axios";
import DashBoardIndex from "./index";
import {BrowserRouter as Router, Switch, Route, Link,Redirect,useHistory,useLocation} from "react-router-dom";

interface State {
    zone_id:number
    username:string
    password:string
    workingAreas:Array<any>
    isLogged:boolean
}

export default class LoginComponent extends React.Component<any, State> {
    
    /*
    definition du state
    * des objets qui vont s'occuper de se connecter à la base de donnée
    * */
    state:State={
        zone_id:0,
        username:'',
        password:'',
        workingAreas:[],
        isLogged:false
    }
    
   
    
    handleUsername=(event:any)=>{
        this.setState({
            username:event.currentTarget.value
        }) 
    }
    
    handlePassword=(event:any)=>{
        this.setState({
            password:event.currentTarget.value
        })
    }
    
    handleArea=(event:any)=>{
        this.setState({
            zone_id:event.currentTarget.value
        })
    }
    
    fetchWorkingArea(){
       let response= axios.get('/Auth/workingAreas')
           .then(success=>{
               this.setState({
                   workingAreas:success.data
               })
           });
    }
    
     handleSubmit=(event:any)=>{
        let history=useHistory()
        axios.post('/Auth/login',{
            username:this.state.username,
            password:this.state.password,
            Area_Id:this.state.zone_id
        }).then(response=>{
            if (response.data != null){
                alert("ok")
                localStorage.setItem("isLogged","yes")
                this.setState({
                    isLogged:true
                })
            }else{
                alert("emty user ")
            }
         
            
        })
            .catch(failure=>{
                
            })
         event.preventDefault()
    }
    
    componentDidMount(): void {
        this.fetchWorkingArea();
    }
    
    /*partie affichage des donnée*/
    render() {
        const isLogged = this.state.isLogged
        if (isLogged) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <div className="authentication">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <form className="card auth_form" onSubmit={this.handleSubmit}>
                                    <div className="header">
                                        <img className="logo" src="assets/images/logo.svg" alt=""/>
                                        <h5>Se connecte</h5>
                                    </div>
                                    <div className="body">
                                        <div className="input-group mb-3">

                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.zone_id} onChange={this.handleArea}>
                                                <option>Selectionnez votre zone de travail</option>
                                                {this.state.workingAreas.map(area=>{
                                                    return <option value={area.id} >{area.libele}</option>;
                                                })}
                                            </select>

                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text"   value={this.state.username} onChange={this.handleUsername} className="form-control" placeholder="Nom d'utilisateur"/>
                                            <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-account-circle"/>
                                        </span>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="password" className="form-control" onChange={this.handlePassword}
                                                   placeholder="Password" />
                                            <div className="input-group-append">
                                        <span className="input-group-text">
                                            <a href="forgot-password.html" className="forgot" title="Forgot Password">
                                                <i className="zmdi zmdi-lock"/>
                                            </a>
                                        </span>
                                            </div>
                                        </div>
                                       
                                        <div className="checkbox">
                                            <input id="remember_me" type="checkbox"/>
                                            <label htmlFor="remember_me">Remember Me</label>
                                        </div>

                                        <input type="submit" className="btn btn-primary btn-block waves-effect waves-light"
                                               value="Se connecter"/>

                                    </div>
                                </form>
                                <div className="copyright text-center">
                                    ©
                                    <script>document.write(new Date().getFullYear())</script>
                                    <span>
                            <a href="templatespoint.net">Templates Point</a>
                    </span>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="card">
                                    <img src="assets/images/signin.svg" alt="Sign In"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}