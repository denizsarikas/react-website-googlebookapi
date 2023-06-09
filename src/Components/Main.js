import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }
    const handleKeyPress = (evt) => {
        if (evt.key === "Enter") {
            searchBook();
        }
    }
    const handleButtonClick = () => {
        searchBook();
    }
    return (
        <>
            <div className="header">
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress} />
                        <button onClick={handleButtonClick}><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}
export default Main;