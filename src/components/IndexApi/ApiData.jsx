import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function ApiData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'api': "ZOLO", 'code': "ZLO", "status": true},
        {'id': 2, 'api': "Etisalat", 'code': "ETS", "status": false},
    ]

    useEffect(() => {
        fetch('http://localhost:3000/apis')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} api={row.name} code={row.code} status={row.status} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>API</th>
                    <th>CODE</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ApiData;