import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function CountryData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        { 'id': 1, 'name': "Bangladesh", 'short': "BD", "code": "+880" },
        { 'id': 2, 'name': "India", 'short': "IND", "code": "+988" }
    ]

    useEffect(() => {
        console.log(sdata)
        fetch('http://localhost:3000/countries')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, [])

    const rows = data.map((row) =>
        <DataRow id={row.id} name={row.name} short={row.short} code={row.code} />
    );

    return (
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Country</th>
                    <th>Short Code</th>
                    <th>Country Code</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default CountryData;