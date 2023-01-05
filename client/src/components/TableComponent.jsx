import { useEffect, useState } from "react"

const TableComponent = ({ data }) => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        if (data) {
            setRows(Object.entries(data))
        }
    }, [data])


    
    const sortWebsites = () => {
        const sortedWebsites = [...rows].sort((a, b) => b[1] - a[1])
        setRows(sortedWebsites)
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