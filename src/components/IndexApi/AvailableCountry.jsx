import { useEffect, useState } from "react";

const Checkbox = ({ obj, onChange }) => {
    return (
      <>
        <input
          type="checkbox"
          id={`custom-checkbox-${obj.index}`}
          name={obj.name}
          value={obj.checked}
          onChange={() => onChange({ ...obj, checked: !obj.checked })}
          checked={obj.checked}
        />
        {obj.name}
      </>
    );
  };

const checkBoxUpdate = ({ obj, onChange, api }) => {
    const chk = true ? obj.api == api : false
    return(
        <>
        <input
          type="checkbox"
          id={`custom-checkbox-${obj.index}`}
          name={obj.name}
          value={obj.checked}
          onChange={() => onChange({ ...obj, checked: !obj.checked })}
          checked={chk}
        />
        {obj.name}
        </>
    )
}

const Checkinput = ({obj ,api, onChange}) => {
    const checkedVal = checkStatus(obj.apiList, api);
    return(
        <p><input 
            type="checkbox" 
            value={obj.name} 
            onChange={()=> onChange()} 
            checked={checkedVal}/> 
            {obj.name}
        </p>
    )
}

const checkStatus = (list, api) => {
    let status = false
    console.log(list);
    console.log(api);
    for (let i = 0; i<list.length; i++){
        if(api == list[i]){
            status = true
        }
    }
    return status;
}

  

function AvailableCountry() {
    const [country, setCountry] = useState(0);
    const [api, setApi] = useState(0);
    const [countries, setCountries] = useState([]);
    const [opt, setOpt] = useState([]);
    const [data, setData] = useState([]);

    let api_ctry = [
        {id: 1, api: 1, name: "Bangladesh", checked: false},
        {id: 2, api: 2, name: "India", checked: true},
        {id: 3, api: 3, name: "Pakistan", checked: false}
    ]

    useEffect(() => {

        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setOpt(data.message);
            })

        fetch('http://localhost:3000/country/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setCountries(data.message);
            })
        // setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

    const countryVal = (event) => {
        setCountry(event.target.value);
    }

    const apiVal = (event) => {
        console.log(parseInt(event.target.value));
        setApi(parseInt(event.target.value));
        const filterdCountry = countries.filter((data) => {
            return data ? data.api == parseInt(event.target.value) : {}
        });

        setData(filterdCountry);
    }

    const saveData = () => {
        console.log("submitting data");

        let submitData = {
            api: api,
            data: data
        }

        console.log(submitData);
        // fetch('http://localhost:3000/network', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
        // clearData();
    }

    return(
        <form id="frm_main" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12">
                    <div className="form-group">
                        <label>Select Country</label>
                        <select class="custom-select" onChange={apiVal}>
                            <option value="0">Select API</option>
                            {options}
                        </select>
                    </div>

                    <div className="checkboxarea">
                    {/* {data.map((obj, index) => (
                        <li key={index}>
                        <Checkbox
                            obj={obj}
                            onChange={(item) => {
                                setData(data.map((d) => (d.id === item.id ? item : d)));
                            }}
                        />
                        </li>
                    ))} */}

                    {/* {countries.map((obj, index) => (
                        <li key={index}>
                        <Checkbox
                            obj={obj}
                            onChange={(item) => {
                                console.log(item);
                                setData(data.map((d) => (d.id === item.id ? item : d)));
                            }}
                        />
                        </li>
                    ))} */}

                    {countries.map((obj, index)=> (
                        <Checkinput 
                            obj={obj}
                            api={api}
                            onChange={(item) => {
                                setCountries(countries.map((d) => (d.id === item.id ? item : d)));
                            }}/>
                    ))}
                    </div>

                    <div className="form-group">
                        <button type="button"
                            className="btn btn-info text-uppercase waves-effect waves-light"
                            id="btn_save" onClick={saveData}> Save</button>
                        <button type="button"
                            className="btn text-uppercase waves-effect waves-light btn-secondary"
                            id="btn_clear">Clear</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AvailableCountry;