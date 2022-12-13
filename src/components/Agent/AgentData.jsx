import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function AgentData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'name': "Mr. Y", 'manager': "Mr. X", 'area': "Location"},
        {'id': 2, 'name': "Mr. Z", 'manager': "Mr. X", 'area': "Location"},
    ]

    useEffect(() => {
        setData(sdata)
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} name={row.name} manager={row.manager} area={row.manager} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Manager</th>
                    <th>Area</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default AgentData;