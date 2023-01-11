import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function ServiceData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} service={row.name} mno={row.mobile.name} />
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