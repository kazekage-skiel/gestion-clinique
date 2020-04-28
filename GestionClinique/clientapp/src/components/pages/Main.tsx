import React from "react";
import PlaceHolder from "./inc/content"; 
import Sidebar from "./inc/SideBar";
import PatientIndex from "./patients";
import DashBoardIndex from "./index";
import ConsultationsIndex from "./consultations";
import AddConsultationComponent from "./consultations/add";
import EnqueueConsultationList from "./consultations/Enqueue";
import {BrowserRouter ,Switch, Route, Link,Router,useHistory,useLocation,Redirect} from "react-router-dom";
import LoginComponent from "./LoginComponent";


interface Props {
    
}


interface State {
    isLogged:boolean,
    authId:number
}

export default class Main extends React.Component<Props,State>{
    
    constructor(props: Readonly<Props>) {
        super(props);
        
        this.state={
            isLogged:false,
            authId:0
        }
    }
    
    render(){
        console.log(localStorage.getItem("isLogged"))
        if (localStorage.getItem("isLogged") == "yes"){
            return(
                <>
                    <Sidebar/>
                   
                        <BrowserRouter>
                            <Switch>
                                <PlaceHolder>

                                <Route  path="/patients">
                                    <Route  path='/index' exact component={PatientIndex}/>
                                </Route>
                                <Route  path="/consultations" component={ConsultationsIndex} />
                                <Route  path="/addConsultation" component={AddConsultationComponent} />
                                <Route  path="/enqueueConsultation" component={EnqueueConsultationList} />
                               
                                <Route exact path="/" component={DashBoardIndex} />
                                </PlaceHolder>
                                <Route  path="/login" component={LoginComponent} />
                            </Switch>
                        </BrowserRouter>

                   
                </>
            )
        }else{
            return(
                <>
                    <Sidebar/>
                
                        <BrowserRouter>
                            <Switch>
                                <PlaceHolder>
                                <Route  path="/patients">
                                    <Route  path='/index' exact component={PatientIndex}/>
                                </Route>
                                <Route  path="/consultations" component={ConsultationsIndex} />
                                <Route  path="/addConsultation" component={AddConsultationComponent} />
                                <Route  path="/enqueueConsultation" component={EnqueueConsultationList} />
                                    <Route exact path="/login" component={LoginComponent} />
                                <Route exact path="/" component={DashBoardIndex} />
                                </PlaceHolder>
                              
                            </Switch>
                        </BrowserRouter>

                    
                </>
            )
        }
       
    }
}