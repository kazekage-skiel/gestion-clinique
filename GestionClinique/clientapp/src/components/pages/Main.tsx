import React from "react";
import PlaceHolder from "./inc/content"; 
import Sidebar from "./inc/SideBar";
import PatientIndex from "./patients";
import DashBoardIndex from "./index";
import ConsultationsIndex from "./consultations";
import AddConsultationComponent from "./consultations/add";
import EnqueueConsultationList from "./consultations/Enqueue";
import {BrowserRouter ,Switch, Route, Link,Router} from "react-router-dom";


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
        return(
           <>
               <Sidebar/>
               <PlaceHolder>
                   <BrowserRouter>
                       <Switch>
                           <Route exact path="/" component={DashBoardIndex} />
                           <Route  path="/patients">
                               <Route exact path='/index' component={PatientIndex}/>
                           </Route>
                           <Route  path="/consultations" component={ConsultationsIndex} />
                           <Route  path="/addConsultation" component={AddConsultationComponent} />
                           <Route  path="/enqueueConsultation" component={EnqueueConsultationList} />
                         
                           
                       </Switch>
                   </BrowserRouter>
               </PlaceHolder>
            </>   
        )
    }
}