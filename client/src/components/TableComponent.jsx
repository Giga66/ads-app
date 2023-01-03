import { useState } from "react"


const TableComponent = ({ data }) => {
    const [obj, setObj] = useState(data)


    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <th>
                            <button className="domain-button">Domain</button>
                        </th>
                        <th>
                            <button className="domain-button" >Count</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && Object.entries(data).map(([key, value]) => {
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