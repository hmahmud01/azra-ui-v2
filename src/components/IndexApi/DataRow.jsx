import { useState, useEffect } from "react";

function DataRow({ id, api, code, status }) {
    const [statusClass, setStatusClass] = useState("");
    const [statusText, setStatusText] = useState("");
    const [statusVal, setStatusVal] = useState(status);

    useEffect(() => {
        const btnClass = statusVal ? "btn btn-sm btn-primary" : "btn btn-sm btn-danger";
        const btnText = statusVal ? "Active" : "Inactive";
        setStatusClass(btnClass);
        setStatusText(btnText);
    }, []);

    const statusCheck = () => {
        console.log(statusVal);
        if (statusVal == true) {
            console.log("de activating");
            setStatusVal(false);
            setStatusClass("btn btn-sm btn-primary");
            setStatusText("Active");
        }else{
            console.log("activating");
            setStatusVal(true);
            setStatusClass("btn btn-sm btn-danger");
            setStatusText("Inactive");
        }
    }


    return(
        <tr>
            <td>{id}</td>
            <td>{api}</td>
            <td>{code}</td>
            <td className="footable-editing footable-last-visible">
                <div class="btn-group btn-group-xs" role="group">
                    <button
                        type="button"
                        className="btn btn-secondary footable-edit edit_row"
                        data-value="{{tr['employee_id']}}"><span
                        className="fas fa-pencil-alt"
                            aria-hidden="true"></span>
                    </button> 
                    <button
                        type="button"
                        className="btn btn-secondary footable-delete delete_row"
                        data-value="{{tr['employee_id']}}"><span
                        className="fas fa-trash-alt"
                            aria-hidden="true"></span>
                    </button>
                </div>
            </td>
            <td>
                <button className={statusClass} onClick={statusCheck}>{statusText}</button>
            </td>
        </tr>
    )
}

export default DataRow;