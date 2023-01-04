import { useEffect, useState } from 'react'
import SearchComponent from './SearchComponent'
import TableComponent from './TableComponent'
import CurrentDomain from './CurrentDomain'
import { SyncLoader } from 'react-spinners'

const ParentComponent = () => {
    const defaultWebsite = 'msn.com'
    const [data, setData] = useState(null)
    const [parseTime, setParseTime] = useState(0)
    const [userInput, setUserInput] = useState(defaultWebsite)
    const [loading, setLoading] = useState(false)
    const [websiteName, setWebsiteName] = useState(defaultWebsite)
    const [error, setError] = useState(null)

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchDataAndMeasureTime()
    }

    const fetchDataAndMeasureTime = async () => {
        const start = performance.now();
        await fetchData()
        setParseTime(performance.now() - start)
        setWebsiteName(userInput)
    }


    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5000/getAds?website=${userInput}`)
            const data = await response.json()

            if (!response.ok) {
                setError(data.error)
                setData(null)
                // console.log(data.error)
            } else {
                setData(data)
                setError(null)
            }
        } catch (error) {
            setData(null)
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchDataAndMeasureTime()
    }, [])

    return (
        <div>
            <SearchComponent handleChange={handleChange} handleSubmit={handleSubmit} />
            <CurrentDomain websiteName={websiteName} data={data} parseTime={parseTime} />
            {loading ?
                <div className='loader'>
                    <SyncLoader color='green' />
                </div>
                : error ? <div className='error-div'>{error}</div> :
                    <TableComponent data={data} />
            }
        </div>
    )
}

export default ParentComponent