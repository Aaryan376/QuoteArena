import './App.css';
import React from "react";
import QuoteGenerator from './QuoteGenerator';
function App() {

  /*const [data, setData] = useState(null);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getTags();
    getQuote();
  }, []);

  async function getQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const { statusCode, statusMessage, ...data } = await response.json();
    if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
    console.log(data.content);
    setData(data);
  }
  
  async function getTags() {
    const res = await fetch('https://api.quotable.io/tags');
    const { statusCode, statusMessage, ...tags } = await res.json();
    if (!res.ok) throw new Error(`${statusCode} ${statusMessage}`);
    console.log(typeof(tags));
    setTags(tags);
    console.log(tags);
  }

  if (!data) return null;
  return (
    <div className="App">
      <div className='card'>
        <p>{data.content}</p>
        <p>-{data.author}</p>
      </div>
    
      <button className='btn' onClick={getQuote}>New Quote</button><br/>
      

    </div>


  );*/
  return (
    <div className='App'>
      <QuoteGenerator/>
    </div>
  )
}

export default App;
