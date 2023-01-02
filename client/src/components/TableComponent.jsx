import { useState } from "react"


const TableComponent = ({ data, error }) => {
    const [obj, setObj] = useState(data)

    const sortedObject = () => {
        const sortedKeys = Object.keys(obj).sort()
        const sortedObject = {}
        sortedKeys.forEach(key => {
            sortedObject[key] = obj[key]
        })
        setObj(sortedObject)
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
                            <button className="domain-button" onClick={sortedObject}>Count</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([key, value]) => {
                        return (
                            <tr key={key}>
                                <td key={key}>{key}</td>
                                <td key={value}>{value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {error && <p className="error-div">{error}</p>}
        </div>
    )

}


export default TableComponent