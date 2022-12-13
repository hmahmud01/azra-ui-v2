import { useEffect, useState } from "react";

function SubDealerForm() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [area, setArea] = useState(0);
    const [dealer, setDealer] = useState(0);
    const [opt, setOpt] = useState([]);

    // Call api for the country list
    const optd = [
        {'id': 1, 'name': "Mr. X"},
        {'id': 2, 'name': "Mr. Y"}
    ] 

    useEffect(() => {
        setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

    const nameVal = (event) => {
        setName(event.target.value);
    }

    const mobileVal = (event) => {
        setMobile(event.target.value);
    }

    const emailVal = (event) => {
        setEmail(event.target.value);
    }

    const codeVal = (event) => {
        setCode(event.target.value);
    }

    const addrVal = (event) => {
        setAddress(event.target.value);
    }

    const cityVal = (event) => {
        setCity(event.target.value);
    }

    const countryVal = (event) => {
        setCountry(event.target.value);
    }

    const areaVal = (event) => {
        setArea(event.target.value);
    }

    const dealerVal = (event) => {
        setDealer(event.target.value);
    }

    let data = {
        'name': name,
        'mobile': mobile,
        'email': email,
        'code': code,
        'address': address,
        'city': city,
        'area': area,
        'country': country,
        'dealer': dealer
    }

    const clearData = () => {
        document.getElementById("name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("code").value = "";
        document.getElementById("address").value = "";
        document.getElementById("city").value = "";
        document.getElementById("country").value = "";
        document.getElementById("area").value = "";
    }

    const saveData = () => {
        console.log(data);
        clearData();
    }

    

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">Name</label>
                        <input type="text" id="name" className="form-control" onChange={nameVal}/>
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
                        <label for="">Email Address</label>
                        <input type="text" id="email" className="form-control" onChange={emailVal}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">Verification Code</label>
                        <input type="text" id="code" className="form-control" onChange={codeVal}/>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label for="">Address</label>
                        <input type="text" id="address" className="form-control" onChange={addrVal}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">City</label>
                        <input type="text" id="city" className="form-control" onChange={cityVal}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label for="">Country</label>
                        <input type="text" id="country" className="form-control" onChange={countryVal}/>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-group">
                        <label>Dealer</label>
                        <select class="custom-select" onChange={dealerVal}>
                            {options}
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="">Area</label>
                        <input type="text" id="area" className="form-control" onChange={areaVal}/>
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

export default SubDealerForm;
