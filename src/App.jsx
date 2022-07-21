import React from 'react'
import './App.css'
import Quote from './components/Quote'

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [quotes, setQuotes] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response) => {
        return response.json();
      }).then((json) => {
        setIsLoaded(true);
        setQuotes(json);
      }).catch((e) => {
        setError(e);
      })
  }, []);

  console.log(quotes);
  return (
    !isLoaded ? <div>Loading</div> :
    <div className="App">
      {quotes.quotes.map(quote => (
          <Quote
            author={quote.author}
            quote={quote.quote}
          />
      ))}
     <p id="author"></p>
    </div>
  )
}

export default App
