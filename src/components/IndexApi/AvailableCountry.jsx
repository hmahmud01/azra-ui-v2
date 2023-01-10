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
        />
        {obj.name}
      </>
    );
  };

function AvailableCountry() {
    const [country, setCountry] = useState(0);
    const [api, setApi] = useState(0);
    const [opt, setOpt] = useState([]);
    const [data, setData] = useState([]);

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
                setData(data.message);
            })
        // setOpt(optd);
    }, [])

    const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)

    const countryVal = (event) => {
        setCountry(event.target.value);
    }

    const apiVal = (event) => {
        console.log(event.target.value);
        setApi(event.target.value);
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
                    {data.map((obj, index) => (
                        <li key={index}>
                        <Checkbox
                            obj={obj}
                            onChange={(item) => {
                                setData(data.map((d) => (d.id === item.id ? item : d)));
                            }}
                        />
                        </li>
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