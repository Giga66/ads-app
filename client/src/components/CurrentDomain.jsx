import { useEffect, useState } from 'react'
import { CSVLink } from 'react-csv'

const CurrentDomain = ({ websiteName, data, fetchData }) => {
    const [parseTime, setParseTime] = useState(0)
    const arr = Object.entries(data).map(([key, value]) => {
        return ({domain: key, count: value})
    })

    useEffect(() => {
        const start = performance.now();
        fetchData()
        setParseTime(performance.now() - start)
    }, [])


    return (
        <div className='current-domain'>
            <p>Current Domain: {websiteName}</p>
            <p>Total Advertisers: {Object.keys(data).length}</p>
            <p>Parse Time: {`${parseTime.toFixed(2)} ms`}</p>
            <CSVLink data={arr} style={{marginTop: 15}}>
                Export To CSV
            </CSVLink>
        </div>
    )
}

export default CurrentDomain