import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function ServiceData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'service': "TopUp", 'mno': "GP",},
        {'id': 2, 'service': "DataLoad", 'mno': "Banglalink"}
    ]

    useEffect(() => {
        setData(sdata)
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} service={row.service} mno={row.mno} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Service</th>
                    <th>MNO</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceData;