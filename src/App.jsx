import React from 'react'
import './App.css'
import Quote from './components/Quote'

// const id = Math.floor(Math.random() * 101);

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [quotes, setQuotes] = React.useState([]);
  const [id, setId] = React.useState(Math.floor(Math.random() * 101));
  const [, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response) => {
        return response.json();
      }).then((response) => {
        setIsLoaded(true);
        setQuotes(response.quotes);
      }).catch((e) => {
        setError(e);
      });
  }, []);

  const handleClick = () => {
    setId(id);
    setQuotes(quotes[id]);
  }

  return (
    !isLoaded ? <div>Loading</div> :
    <div className="App">
      <Quote
        quote={quotes[id].quote}
        author={quotes[id].author}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
