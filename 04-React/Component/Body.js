import { useEffect, useState } from "react";

const Body = () => {

    const [Btn,setBtn] = useState("Login")
    const [List,setList] = useState([]);
    const [FilterList,setFilterList] = useState([]);
    const [Value,setValue] = useState("");

    useEffect(() => {
        FetchData();
    },[])

    const FetchData = async() => {
        const data = await fetch("https://dummyjson.com/quotes")
        const JSON = await data.json();

        setList(JSON.quotes)
        setFilterList(JSON.quotes)
    }

    console.log(List);
    
    return (
        <div className="body-container">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={Value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={() => {
                    const Auth = List.filter((card) => card.author===Value)
                    setFilterList(Auth)
                }}>Search</button>
            </div>

            <button onClick={() => {
                if(Btn=="Login") setBtn("Logout")
                else setBtn("Login")
            }}>{Btn}</button>

            <button onClick={() => {
                const ReList = List.filter((card) => card.id>26)

                setFilterList(ReList)
            }}>Filter</button>


            {/* Card Container */}
            <div className="card-container">
                {FilterList.map((card) => (
                    <div className="card" key={card.id}>
                        <h3>{card.quote}</h3>
                        <p>{card.author}</p>
                        <p>{card.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;