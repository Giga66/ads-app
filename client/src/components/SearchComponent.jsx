
const SearchComponent = ({handleChange, handleSubmit}) => {

    return (
        <div>
            <div className='main-div'>
                <h1>Ads File Parser</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="search" onChange={handleChange} />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchComponent