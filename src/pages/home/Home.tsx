import React, {useState} from "react";
import "./home.css";
import MagnifyingGlass from "../../images/magnifying-glass.svg"

const Home: React.FC = () => {
    const [state, setState] = useState({query: '', list: [{url:"", title:""}]})
    const posts = [{url:"", title:"Art no 1"}, {url:"", title: "Art no 2"}]

    const handleChange = (e: { target: { value: string; }; }) => {
        const results = posts.filter(post => {
        if (e.target.value === "") return posts
        return post.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
       setState({
        query: e.target.value,
        list: results
    })
    }

    return (
      <div className="Page-container">
        <div className="Upper-block">
        <div className="Flex-row Top Show-child">
            <h1 className="Search-header">Art is a line around your thoughts</h1>
            <p>Gustav Klimt</p>
        </div>
          <div className="Search-container">
            <input spellCheck="false" autoFocus autoComplete="off" type="text" value={state.query} onChange={handleChange} placeholder="Search by Artist Name" />
            <div className="Icon-container"><img src={MagnifyingGlass} alt="Magnifying glass" /></div>
          </div> 
          </div>
      </div>)
}

export default Home;
