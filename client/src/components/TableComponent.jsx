import { useEffect, useState } from "react"
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons'

const TableComponent = ({ data }) => {
    const [rows, setRows] = useState([])
    const [ascending, setAscending] = useState(true)

    useEffect(() => {
        if (data) {
            setRows(Object.entries(data))
        }
    }, [data])



    const sortWebsites = () => {
        if (ascending) {
            setRows([...rows].sort((a, b) => b[1] - a[1]))
            setAscending(false)
        } else {
            setRows([...rows].sort((a, b) => a[1] - b[1]))
            setAscending(true)
        }
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
                            <button className="domain-button" onClick={sortWebsites}>Count {ascending ? <BsFillArrowDownSquareFill /> : <BsFillArrowDownSquareFill />}</button>
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