

function Search() {
    return (
        <div className="search">
            <i class="fas fa-search"></i>
            <input type="text" defaultValue="" placeholder="Search Google or type a URL" name="search"/>

            <div className="searchButtons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
        </div>

    )
}

export default Search;