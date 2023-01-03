import { CSVLink } from 'react-csv'

const CurrentDomain = ({ websiteName, data, parseTime }) => {
    let csvArray
    if (data && Object.entries(data).length > 0) {
        csvArray = Object.entries(data).map(([key, value]) => {
            return ({ domain: key, count: value })
        })
    }


    return (
        <div className='current-domain'>
            <p>Current Domain: {websiteName}</p>
            <p>Total Advertisers: {data ? Object.keys(data).length : 0}</p>
            <p>Parse Time: {`${parseTime.toFixed()} ms`}</p>
            {csvArray && <CSVLink data={csvArray} style={{ marginTop: 15 }}>
                Export To CSV
            </CSVLink>}
        </div>
    )
}

export default CurrentDomain