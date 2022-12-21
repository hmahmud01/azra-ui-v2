import { useState, useEffect } from "react";
import DataRow from "./DataRow";

function SubDealerData() {
    const [data, setData] = useState([]);

    // call api to get these datas
    const sdata = [
        {'id': 1, 'name': "Mr. Y", 'mobile': "01XXXXXXX00", 'area': "Location"},
        {'id': 2, 'name': "Mr. Z", 'mobile': "01XXXXXXXXX", 'area': "Location"},
    ]

    useEffect(() => {
        fetch('http://localhost:3000/subdealers')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                setData(data.message);
            })
    }, []);

    const rows = data.map((row) =>
        <DataRow id={row.id} name={row.name} mobile={row.mobile} area={row.area} />
    );

    return(
        <div class="table-responsive">
            <table id="tbl_data" className="table display table-bordered table-striped no-wrap">
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Area</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default SubDealerData;