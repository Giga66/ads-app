import { useState, useEffect } from "react"

const SearchBar = () => {
    const [data, setData] = useState('')
    const [userInput, setUserInput] = useState('')

    useEffect(() =>{
        const fetchInitialData = async () =>{
            const response = await fetch(`http://localhost:5000/getAds?website=msn.com/`)
            const data = await response.json()
            setData(data)
        }
        fetchInitialData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getAds?website=${userInput}`)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
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
        <div class='main-div'>
            <h1>Vidazoo Assignment</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <div class="table-div">
                <table>
                    <thead>
                            <th>Domain</th>
                            <th>Count</th>
                    </thead>
                    <tbody>
                            {Object.entries(data).map(([key, value]) => {
                                return (
                                    <tr>
                                        <td key={key}>{key}</td>
                                        <td key={key}>{value}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchBar