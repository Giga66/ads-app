import { useState, useEffect } from "react"

const SearchComponent = () => {
    const [data, setData] = useState('')
    const [userInput, setUserInput] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchInitialData = async () => {
            const response = await fetch(`http://localhost:5000/getAds?website=msn.com/`)
            const data = await response.json()
            setData(data)
        }
        fetchInitialData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getAds?website=${userInput}`)
            if (!response.ok) {
                throw new Error('Could not fetch data, please try again')
            }
            const data = await response.json()
            setData(data)
            setError(null)
        } catch (error) {
            setData('')
            setError(error.message)
        }
    }

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchData()
    }


    return (
        <div className='main-div'>
            <h1>Vidazoo Assignment</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <div className="table-div">
                <table>
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>Count</th>
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
                {error && <div className="error-div">{error}</div>}
            </div>
            <div>
            </div>
        </div>
    )
}

export default SearchComponent