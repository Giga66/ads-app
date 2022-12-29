import { useState } from "react"

const SearchBar = () => {
    const [data, setData] = useState('')
    const [userInput, setUserInput] = useState('')

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/getAds?website=${userInput}`)
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e =>{
        setUserInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetchData()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
            <h5>{data}</h5>
        </div>
    )
}

export default SearchBar