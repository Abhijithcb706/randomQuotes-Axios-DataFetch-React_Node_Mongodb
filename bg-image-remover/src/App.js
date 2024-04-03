import react, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

const [Quotes, setQuotes] = useState('');
const [SavedQuotes, setSavedQuotes] = useState([]);


useEffect(() => {
  
  
}, [Quotes]);


useEffect(() => {
  savedQuotes(); // Fetch saved quotes when the component mounts
}, []);




const getQuote =()=>{
console.log('buttton clicked');
axios.get('https://dummyjson.com/quotes/random')
.then(response => {
  console.log(response.data.quote);
  setQuotes(response.data.quote)
})
.catch((error) => {
console.error("Error fetching data:", error);
});
}

const saveData =(content)=>{
  console.log("save button clicked");
  const quoteResponse=axios.post('http://localhost:5000/saveQuotes',{content:content})
  .then(response=>{
    console.log("quoteResponse:",quoteResponse);

  })
  .catch(error => {
    console.error("Error saving quote to MongoDB:", error);
  });
}

const savedQuotes = () => {
  axios.get('http://localhost:5000/savedQuotes')
    .then(response => {
      console.log("Saved quotes:", response.data.content);
      setSavedQuotes(response.data.content);
    })
    .catch(error => {
      console.error("Error fetching saved quotes:", error);
    });
}

return (
<div className="App">
  <h1>Random Quotes</h1>
  <button onClick={getQuote} className="btn">get quotes</button>
  {Quotes && <p>{Quotes} </p> }
  

  <button onClick={() => saveData(Quotes)} className="dbBtn">save to Database</button>
 
  <ul>
  {SavedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
        
      </ul>
</div>
);

}

export default App;