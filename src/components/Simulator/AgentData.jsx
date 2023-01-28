import { useState, useEffect } from "react";
import AgentDataRow from "./AgentDataRow";

function AgentData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/allagenttrx')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    let balance = 0.00

    for (let i = 0; i<data.length; i++){
        balance = balance + data[i].transferedAmount - data[i].deductedAmount;
    }

    const rows = data.map((row) =>
        <AgentDataRow id={row.id} user={row.user.email} credit={row.transferedAmount} debit={row.deductedAmount} date={row.createdAt} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>user</th>
                    <th>credit</th>
                    <th>debit</th>
                    <th>date</th>
                </thead>
                <tbody>
                    {rows}
                    <tr>
                        <td><strong>Current Balance</strong></td>
                        <td></td>
                        <td><strong>{balance}</strong></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AgentData;