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
        setData(sdata)
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} api={row.api} code={row.code} status={row.status} />
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