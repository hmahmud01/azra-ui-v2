import { useState, useEffect } from "react";

function CountryForm() {
    const [name, setName] = useState("");
    const [short, setShort] = useState("");
    const [code, setCode] = useState("");

    const nameVal = (event) => {
        setName(event.target.value);
    }

    const shortVal = (event) => {
        setShort(event.target.value);
    }

    const codeVal = (event) => {
        setCode(event.target.value);
    }

    let data = {
        'name' : name,
        'short': short,
        'code': code
    }

    const clearData = () => {
        document.getElementById("name").value = "";
        document.getElementById("short").value = "";
        document.getElementById("code").value = "";
    }

    const saveData = () => {
        console.log("data Saving : ", data);
        clearData();
    }

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Country Name</label>
                        <input type="text" id="name" className="form-control" onChange={nameVal}/>
                    </div>
                    <div class="form-group">
                        <label for="">Country Short Code</label>
                        <input type="text" id="short" className="form-control" onChange={shortVal}/>
                    </div>
                    <div class="form-group">
                        <label for="">Country Code</label>
                        <input type="text" id="code" className="form-control" onChange={codeVal}/>
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

export default CountryForm;