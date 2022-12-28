import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function SimulatorData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'number': "1199923", 'amount': 200.0, 'by': "Mr.Bilton", 'api': "ZOLO"},
        {'id': 2, 'number': "4649888", 'amount': 130.0, 'by': "Mr.Milton", 'api': "EtiSalat"},
    ]

    useEffect(() => {
        fetch('http://localhost:3000/alltrx')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} number={row.phone} amount={row.amount} by={row.agent} api={row.api.code} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Number</th>
                    <th>Amount</th>
                    <th>By</th>
                    <th>API</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default SimulatorData;