import { useState } from "react"


const TableComponent = ({ data }) => {
    const [obj, setObj] = useState(data)

    const sortWebsites = () => {
        const arrayOfWebsites = Object.entries(obj).map(([key, value]) => ({ key, value }))
        const sortedArray = arrayOfWebsites.sort((a, b) => a.value - b.value)

        console.log(sortedArray)
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
                    {data && Object.entries(obj).map(([key, value]) => {
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