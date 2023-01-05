import { useEffect, useState } from "react"
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs'

const TableComponent = ({ data }) => {
    const [rows, setRows] = useState(data? Object.entries(data) : [])
    const [ascending, setAscending] = useState(true)

    const sortWebsites = () => {
        setRows([...rows].sort((a, b) => ascending ? b[1] - a[1] : a[1] - b[1]))
        setAscending((prevState) => !prevState)
    }


    useEffect(() => {
        sortWebsites()
    }, [])



    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>
                            <button className="domain-button">Domain</button>
                        </th>
                        <th>
                            <button className="domain-button" onClick={sortWebsites}>Count {ascending ? <BsFillArrowUpSquareFill /> : <BsFillArrowDownSquareFill />}</button>
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