import { useEffect, useState } from "react";

function MnoForm() {
    const [mno, setMno] = useState("");
    const [country, setCountry] = useState(0);
    const [opt, setOpt] = useState([]);

    // Call api for the country list
    const optd = [
        {'id': 1, 'name': "BD"},
        {'id': 2, 'name': "IND"}
    ] 

    useEffect(() => {
        setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

    const mnoVal = (event) => {
        setMno(event.target.value);
    }

    const countryVal = (event) => {
        setCountry(event.target.value);
    }

    let data = {
        'mno': mno,
        'country': country
    }

    const clearData = () => {
        document.getElementById("mno").value = "";
    }

    const saveData = () => {
        console.log(data);
        fetch('http://localhost:3000/network', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        clearData();
    }

    

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="">Network Name</label>
                        <input type="text" id="mno" className="form-control" onChange={mnoVal}/>
                    </div>
                    <div className="form-group">
                        <label>Select Country</label>
                        <select class="custom-select" onChange={countryVal}>
                            {options}
                        </select>
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

export default MnoForm;
