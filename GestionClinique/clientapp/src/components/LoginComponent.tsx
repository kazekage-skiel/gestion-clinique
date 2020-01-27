import React, {SyntheticEvent} from "react";
import logo from './../../public/assets/images/logo.svg'

interface Props {

}

interface State {
    zone_id:number
    username:string
    password:string
}

export default class LoginComponent extends React.Component<Props, State> {
    constructor(props: Props,state:State) {
        super(props)
        this.state=state
        
        this.getValue=this.getValue.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    }
    
    getValue=(event:any)=>{
        console.log(event.currentTarget.value)
       this.setState({
           username:event.currentTarget.value
       })
    }
    
    handleSubmit=()=>{
        console.log(this.state.username)
    }
  
    

    render() {
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
                                            <input type="text"   value={this.state.username} onChange={this.getValue} className="form-control" placeholder="Nom d'utilisateur"/>
                                            <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="zmdi zmdi-account-circle"/>
                                        </span>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" id={"password"}
                                                   placeholder="Password"/>
                                            <div className="input-group-append">
                                        <span className="input-group-text">
                                            <a href="forgot-password.html" className="forgot" title="Forgot Password">
                                                <i className="zmdi zmdi-lock"/>
                                            </a>
                                        </span>
                                            </div>
                                        </div>
                                        <div className={"input-group mb-6"}>
                                            <select >
                                                <option>loca</option>
                                                <option>dsds</option>
                                                <option>dwa</option>
                                            </select>
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
                                    <script>document.write(new Date().getFullYear())</script>2019,
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