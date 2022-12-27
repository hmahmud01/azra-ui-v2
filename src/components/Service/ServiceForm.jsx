import { useEffect, useState } from "react";

function ServiceForm() {
    const [service, setService] = useState("");
    const [mno, setMno] = useState(0);
    const [opt, setOpt] = useState([]);

    // Call api for the country list
    const optd = [
        {'id': 1, 'mno': "GP"},
        {'id': 2, 'mno': "BL"},
        {'id': 3, 'mno': "Airtel"}
    ] 

    useEffect(() => {
        fetch('http://localhost:3000/network/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setOpt(data.message);
            })
        // setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

    const serviceVal = (event) => {
        setService(event.target.value);
    }

    const mnoVal = (event) => {
        setMno(event.target.value);
    }

    let data = {
        'service': service,
        'mno': mno
    }

    const clearData = () => {
        document.getElementById("name").value = "";
    }

    const saveData = () => {
        console.log(data);
        fetch('http://localhost:3000/service', {
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
                        <label for="">Service Name</label>
                        <input type="text" id="name" className="form-control" onChange={serviceVal}/>
                    </div>
                    <div className="form-group">
                        <label>Select Mobile Network</label>
                        <select class="custom-select" onChange={mnoVal}>
                            <option value="0">Select Network</option>
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

export default ServiceForm;
