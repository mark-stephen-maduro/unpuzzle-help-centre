const Table = ({ rows, classes }) => {
    return (
        <>
            {
                rows.length > 0 ? <table className={classes}><tbody>
                    {
                        rows.map((row, index) =>
                            <tr key={index}>
                                {
                                    row.map((r,i) => <td key={i}><p>{r}</p></td>)
                                }
                            </tr>
                        )
                    }
                </tbody></table> : <></>
            }
        </>
    )
}

export default Table;