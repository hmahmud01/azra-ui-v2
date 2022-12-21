import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function CircleData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'name': "National", 'ctry': "BD",},
        {'id': 2, 'name': "InterNational", 'ctry': "IND"}
    ]

    useEffect(() => {
        fetch('http://localhost:3000/circles')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} name={row.name} ctry={row.ctry} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Circle</th>
                    <th>Country</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default CircleData;