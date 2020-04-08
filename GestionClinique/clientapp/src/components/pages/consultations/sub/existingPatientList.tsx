import React from "react";


const SickPatientList = (props: any) => {

    // @ts-ignore
    const list = props.patient.map(function (patient, index) {
        
        let _state;
        if (patient.state==0){
            _state=<td>Aucune consultation en cours</td>
        }else if(patient.state ==1){
            _state=<td>En cours de consultation </td>
        }
            return (<tr>
                <td>{patient.lname}</td>
                <td>{patient.fname}</td>
                <td>{_state}</td>
                <td>
                    <a href={"/gestion-consultation/voir/"+patient.id} className={"btn btn-success"}>
                        Gerer
                    </a>
                </td>
            </tr>);
        }
    )
    return (
        <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                    <div className="header">
                        <h2><strong>Hover</strong> Rows</h2>
                        <ul className="header-dropdown">
                            <li className="dropdown"><a href="javascript:void(0);" className="dropdown-toggle"
                                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                                        aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else</a></li>
                                </ul>
                            </li>
                            <li className="remove">
                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <p>Add <code>.table-hover</code> to enable a hover state on table rows within
                            a <code>&lt;tbody&gt;</code>.</p>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prenoms</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {list}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SickPatientList
