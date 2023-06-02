import React, {useState} from "react";
import './SearchBar.css';
import BusinessList from './BusinessList.js';
import { fetchData } from './utils/yelpAPI.js';

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [searchSort, setSearchSort] = useState("best_match");
    const [businessData, setBusinessData] = useState([]);

    const handleOnClick = (event) => {
        setSearchSort(event.target.value);
    }

    const handleOnChange = (event) => {
        
        if (event.target.id === "input1") {
            setSearchTerm(event.target.value);
        }
        else {
            setSearchLocation(event.target.value);
        }
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${searchSort}`);
        const response = await fetchData(searchTerm, searchLocation, searchSort);
        console.log(response);
        setBusinessData(response.businesses);
    }

    return (
        <div>
            <div className="search">
                <div className="form-container">
                    <div className="button-container">
                        <button className="button" onClick={handleOnClick} value="best_match" style={{ backgroundColor: searchSort === 'best_match' ? "#D97C0B" : "#F2BC1B" }}>Best Match</button>
                        <button className="button" onClick={handleOnClick} value="rating" style={{ backgroundColor: searchSort === 'rating' ? "#D97C0B" : "#F2BC1B" }}>Highest Rated</button>
                        <button className="button" onClick={handleOnClick} value="review_count" style={{ backgroundColor: searchSort === 'review_count' ? "#D97C0B" : "#F2BC1B"  }}>Most Reviewed</button>
                    </div>
                    <div className="input-container">
                        <input type="text" id="input1" value={searchTerm} onChange={handleOnChange} placeholder="Search Term"/>
                        <input type="text" id="input2" value={searchLocation} onChange={handleOnChange} placeholder="Location"/>
                    </div>
                    <button className="search-button" type="submit" onClick={handleOnSubmit}>Search</button>
                </div>
            </div>
            <BusinessList returnedBusinesses={businessData} />
        </div>
    )
}

export default SearchBar;