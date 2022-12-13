import BreadCrumb from "../components/Misc/BreadCrumb";
import AgentData from "../components/Agent/AgentData";
import AgentForm from "../components/Agent/AgentForm";


function Agent() {
    return(
        <div className="">
            <BreadCrumb title={"Title"} />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Agent List</h3>
                            <ul className="nav nav-tabs customtab" role="tablist">
                                <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#list"
                                        role="tab"><span className="hidden-sm-up"><i className="ti-list"></i></span> <span
                                            classname="hidden-xs-down">List</span></a> </li>
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#addnew"
                                        role="tab"><span className="hidden-sm-up"><i className="ti-plus"></i></span> <span
                                        className="hidden-xs-down">Add New</span></a> </li>
                            </ul>
                            <div className="tab-content">
                                <div className="clearfix">&nbsp;</div>
                                <div className="tab-pane active" id="list" role="tabpanel">
                                    <div className="clearfix">&nbsp;</div>
                                    <p>Table Content</p>
                                    <AgentData />
                                </div>
                                <div className="tab-pane" id="addnew" role="tabpanel">
                                    <AgentForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agent;