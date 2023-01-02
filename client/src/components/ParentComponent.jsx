import { useState } from 'react'
import SearchComponent from './SearchComponent'
import TableComponent from './TableComponent'
import CurrentDomain from './CurrentDomain'
import { SyncLoader } from 'react-spinners'

const Context = () => {
    const defaultWebsite = 'msn.com'
    const [data, setData] = useState('')
    const [userInput, setUserInput] = useState(defaultWebsite)
    const [loading, setLoading] = useState(false)
    const [websiteName, setWebsiteName] = useState(defaultWebsite)
    const [error, setError] = useState(null)

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetchData()
        setWebsiteName(userInput)
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5000/getAds?website=${userInput}`)

            if (!response.ok) {
                setLoading(false)
                throw new Error('No ads.txt file to display')
            }
            const data = await response.json()
            setData(data)
            setError(null)
            setLoading(false)
        } catch (error) {
            setData('')
            setError(error.message)
        }

    }

    return (
        <div>
            <SearchComponent handleChange={handleChange} handleSubmit={handleSubmit} />
            <CurrentDomain websiteName={websiteName} data={data} fetchData={fetchData} />
            {loading ?
            <div className='loader'>
                <SyncLoader color='green'/>
            </div>
                :
                <TableComponent data={data} error={error} />
            }
        </div>
    )
}

export default Context