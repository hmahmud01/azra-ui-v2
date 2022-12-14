import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function MnoData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'mno': "GP", 'ctry': "BD"},
        {'id': 2, 'mno': "Banglalink", 'ctry': "BD"},
        {'id': 3, 'mno': "Airtel", 'ctry': "IND"}
    ]

    useEffect(() => {
        fetch('http://localhost:3000/networks')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} mno={row.name} ctry={row.nation.name} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>MNO</th>
                    <th>Data</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default MnoData;