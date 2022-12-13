function DataRow({ id, name, manager, area }) {
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{manager}</td>
            <td>{area}</td>
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
        </tr>
    )
}

export default DataRow;