function AgentDataRow({ id, user, credit, debit, date }) {
    return(
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{credit}</td>
            <td>{debit}</td>
            <td>{date}</td>
        </tr>
    )
}

export default AgentDataRow;