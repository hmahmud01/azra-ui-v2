import { useEffect, useState } from "react";

function ApiForm() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [info, setInfo] = useState("");
    const [type, setType] = useState(0);
    const [status, setStatus] = useState(0);
    const [credentials, setCredentials] = useState("");
    const [opt, setOpt] = useState([]);
    const [statusopt, setStatusopt] = useState([]);

    // Call api for the country list
    const optd = [
        {'id': 1, 'name': "Urlencoded"},
        {'id': 2, 'name': "JSON"}
    ]

    const stats = [
        {'status': "active"},
        {'status': "inactive"}
    ]

    useEffect(() => {
        setOpt(optd);
        setStatusopt(stats);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)
    const statoptions = statusopt.map((value) => <option value={value.status}>{ value.status }</option>)

    const nameVal = (event) => {
        setName(event.target.value);
    }

    const codeVal = (event) => {
        setCode(event.target.value);
    }

    const infoVal = (event) => {
        setInfo(event.target.value);
    }

    const typeVal = (event) => {
        setType(event.target.value);
    }
 
    const credVal = (event) => {
        setCredentials(event.target.value);
    }

    const statusVal = (event) => {
        setStatus(event.target.value);
        console.log(event.target.value);
    }

    let data = {
        'name': name,
        'code': code,
        "info": info,
        'status': status,
        "credentials": credentials,
        'type': type
    }

    const clearData = () => {
        document.getElementById("name").value = "";
    }

    const saveData = () => {
        console.log(data);
        clearData();
    }

    const statusOptions = stats.map(function(row){
        return(
            <div className="form-check">
                <input class="form-check-input" 
                        type="radio" name="status" 
                        value={row.status}
                        checked={status == row.status}
                        onChange={statusVal}/>
                <label class="form-check-label" for="exampleRadios1">
                    {row.status}
                </label>
            </div>
        )
    }, this)

    

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" id="name" className="form-control" onChange={nameVal}/>
                    </div>

                    <div class="form-group">
                        <label for="">API Code</label>
                        <input type="text" id="code" className="form-control" onChange={codeVal}/>
                    </div>

                    <div class="form-group">
                        <label for="">Info</label>
                        <input type="text" id="info" className="form-control" onChange={infoVal}/>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select class="custom-select" onChange={statusVal}>
                            {statoptions}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Request Type</label>
                        <select class="custom-select" onChange={typeVal}>
                            {options}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="">Credentials</label>
                        <textarea class="form-control" id="credentials" rows="3" onChange={credVal}></textarea>
                    </div>

                    <div className="form-group">
                        <button type="button"
                            className="btn btn-info text-uppercase waves-effect waves-light"
                            id="btn_save" onClick={saveData}> Save</button>
                        <button type="button"
                            className="btn text-uppercase waves-effect waves-light btn-secondary"
                            id="btn_clear" onClick={clearData}>Clear</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ApiForm;
