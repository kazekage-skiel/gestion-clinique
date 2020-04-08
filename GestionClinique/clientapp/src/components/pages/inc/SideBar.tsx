import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    useParams, Link,
    Redirect
} from "react-router-dom";
import { withRouter } from 'react-router-dom'

const Sidebar = () => {
    return (

    <>
        <Router>
        <div className="navbar-right">
            <ul className="navbar-nav">
                <li><button type={"button"} className="main_search" onClick={function () {
                   localStorage.clear()
                    window.location.reload()
                }}>
                    <i className="zmdi zmdi-search"></i>
                    
                </button></li>
            </ul>
        </div>


        <aside id="leftsidebar" className="sidebar">
            <div className="navbar-brand">
                <button className="btn-menu ls-toggle-btn" type="button">
                    <i className="zmdi zmdi-menu"></i>
                </button>
                <a href="index.html">
                    <img src="assets/images/logo.svg" width="25" alt="Aero"/>
                    <span className="m-l-10">Gestion de clinique</span></a>
            </div>
            <div className="menu">
                <ul className="list">
                    <li>
                        <div className="user-info">
                            <a className="image" href="profile.html">
                                <img src="assets/images/profile_av.jpg"
                                     alt="User"/></a>
                            <div className="detail">
                                <h4>Admin</h4>
                                <small>Super Admin</small>
                            </div>
                        </div>
                    </li>
                    <li className="active open">
                        <a href="/">
                            <i className="zmdi zmdi-home"></i
                            ><span>Acceuil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-toggle">
                            <i className="zmdi zmdi-assignment"></i>
                            <span>Consultations</span></a>
                        <ul className="ml-menu">
                            <li>
                                <a href="/consultations">Liste des consultations</a>
                            </li>
                            <li>
                                <a href="/addConsultation">Ajouter une nouvelle consultations</a>
                            </li>  
                            <li>
                                <a href="/enqueueConsultation">Liste des consultations en cours</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="menu-toggle">
                            <i className="zmdi zmdi-hc-fw"></i>
                            <span>Patients</span></a>
                        <ul className="ml-menu">
                            <li>
                                <a href="/patients/index">Tous les patients</a>
                            </li>
                            <li>
                                <a href="file-documents.html">Patients en cours de consultations</a>
                            </li>
                            <li><a href="file-images.html">Compte en hospitalisation</a></li>
                        </ul>
                    </li>
                 
                    <li>
                        <a href="#" className="menu-toggle">
                            <i className="zmdi zmdi-assignment"></i>
                            <span>Hospitalisations</span></a>
                        <ul className="ml-menu">
                            <li><a href="project-list.html">Liste de toutes les hospitalisations</a></li>
                            <li><a href="ticket-list.html">Hospitalisations en cours</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
        </Router>
    </>


           

    )
}

export default Sidebar
