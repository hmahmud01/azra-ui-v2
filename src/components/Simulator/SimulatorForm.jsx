import { use, useEffect, useState } from "react";

function SimulatorForm() {
    const [mobile, setMobile] = useState("");
    const [amount, setAmount] = useState(0.00);
    const [country, setCountry] = useState(0);
    const [network, setNetwork] = useState(0);
    const [service, setService] = useState(0);
    const [countries, setCountries] = useState([]);
    const [networks, setNetworks] = useState([]);
    const [services, setServices] = useState([]);
    const [networklist, setNetworklist] = useState([]);
    const [servicelist, setServicelist] = useState([]);

    // Call api for the country list
    const countryOps = [
        {'id': 1, 'name': "Bangladesh"},
        {'id': 2, 'name': "India"}
    ] 

    const networkOps = [
        {'id': 1, 'name': "Gp", 'country': 1},
        {'id': 2, 'name': "Airtel", 'country': 2},
        {'id': 3, 'name': "Banglalink", 'country': 1}
    ] 

    const serviceOps = [
        {'id': 1, 'name': "Dataload", 'network': 1},
        {'id': 2, 'name': "TopUp", 'network': 2}
    ] 

    useEffect(() => {
        setCountries(countryOps);
        setNetworks(networkOps);
        setServices(serviceOps);
    }, [])

    const ctry = countries.map((value) => <option value={value.id}>{ value.name }</option>)
    const net = networklist.map((value) => <option value={value.id}>{ value.name }</option>)
    const serv = servicelist.map((value) => <option value={value.id}>{ value.name }</option>)

    const mobileVal = (event) => {
        setMobile(event.target.value);
    }

    const amountVal = (event) => {
        setAmount(event.target.value);
    }

    const countryVal = (event) => {
        setCountry(event.target.value);
        let ctry = event.target.value;
        const filterdNetwork = networks.filter((data) => {
            return data ? data.country === parseInt(ctry) : {}
        }); 

        setNetworklist(filterdNetwork);
    }

    const networkVal = (event) => {
        setNetwork(event.target.value);
        let net = event.target.value;
        const filteredService = services.filter((data) => {
            return data ? data.network === parseInt(net) : {}
        });

        setServicelist(filteredService);
    }

    const serviceVal = (event) => {
        setService(event.target.value);
    }

    let data = {
        'mobile': mobile,
        'amount': amount,
        'country': parseInt(country),
        'network': parseInt(network),
        'service': parseInt(service)
    }

    const clearData = () => {
        document.getElementById("mobile").value="";
        document.getElementById("amount").value=null;
        document.getElementById("country").selectedIndex="0";
        document.getElementById("network").selectedIndex="0";
        document.getElementById("service").selectedIndex="0";
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
                        <select class="custom-select" id="country" onChange={countryVal}>
                            <option value="0">Select Country</option>
                            {ctry}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <label>Network</label>
                        <select class="custom-select" id="network" onChange={networkVal}>
                            <option value="0">Select Network</option>
                            {net}
                        </select>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <label>Service Type</label>
                        <select class="custom-select" id="service" onChange={serviceVal}>
                            <option value="0">Select Service</option>
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
                        <input type="text" id="amount" className="form-control" onChange={amountVal}/>
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
