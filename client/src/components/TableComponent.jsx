import { useEffect, useState } from "react"

const TableComponent = ({ data }) => {
    const [rows, setRows] = useState([])

    let isSorted = false

    useEffect(() => {
        if (data) {
            if(isSorted){
                setRows(rows)
            }else{
                setRows(Object.entries(data))
            }
        }
    }, [data])
    
    
    const sortWebsites = () => {
        rows.sort((a, b) => a[1] - b[1]); isSorted = true
    }


    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>
                            <button className="domain-button">Domain</button>
                        </th>
                        <th>
                            <button className="domain-button" onClick={sortWebsites}>Count</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows?.map(([key, value]) => {
                        return (
                            <tr key={key}>
                                <td key={key}>{key}</td>
                                <td key={value}>{value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}


export default TableComponent