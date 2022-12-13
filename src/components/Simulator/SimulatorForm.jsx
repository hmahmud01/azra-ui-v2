import { useEffect, useState } from "react";

function SimulatorForm() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [manager, setManager] = useState(0);
    const [opt, setOpt] = useState([]);
    const [countries, setCountries] = useState([]);
    const [networks, setNetworks] = useState([]);
    const [services, setServices] = useState([]);


    // Call api for the country list
    const countryOps = [
        {'id': 1, 'name': "Bangladesh"},
        {'id': 2, 'name': "India"}
    ] 

    const networkOps = [
        {'id': 1, 'name': "Gp"},
        {'id': 2, 'name': "Airtel"},
        {'id': 2, 'name': "Banglalink"}
    ] 

    const serviceOps = [
        {'id': 1, 'name': "Dataload"},
        {'id': 2, 'name': "TopUp"}
    ] 

    useEffect(() => {
        setOpt(countryOps);
        setCountries(countryOps);
        setNetworks(networkOps);
        setServices(serviceOps);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)
    const ctry = countries.map((value) => <option value={value.id}>{ value.name }</option>)
    const net = networks.map((value) => <option value={value.id}>{ value.name }</option>)
    const serv = services.map((value) => <option value={value.id}>{ value.name }</option>)

    const mobileVal = (event) => {
        setMobile(event.target.value);
    }

    const managerVal = (event) => {
        setManager(event.target.value);
    }

    let data = {
        'name': name,
        'mobile': mobile,
        'email': email,
        'code': code,
        'address': address,
        'city': city,
        'manager': manager,
        'country': country,
    }

    const clearData = () => {
        console.log("data clearing");
    }

    const saveData = () => {
        console.log(data);
        clearData();
    }

    

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Country</label>
                        <select class="custom-select" onChange={managerVal}>
                            {ctry}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <label>Network</label>
                        <select class="custom-select" onChange={managerVal}>
                            {net}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <label>Service Type</label>
                        <select class="custom-select" onChange={managerVal}>
                            {serv}
                        </select>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">Mobile Number</label>
                        <input type="text" id="mobile" className="form-control" onChange={mobileVal}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">Amount</label>
                        <input type="text" id="mobile" className="form-control" onChange={mobileVal}/>
                    </div>
                </div>

                <div className="col-md-12">
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

export default SimulatorForm;
