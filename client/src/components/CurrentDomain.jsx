import { useEffect, useState } from 'react'

const CurrentDomain = ({ websiteName, data, fetchData }) => {
    const [parseTime, setParseTime] = useState(0)

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
        </div>
    )
}

export default CurrentDomain