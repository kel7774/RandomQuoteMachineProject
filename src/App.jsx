import React from 'react'

import Quote from './components/Quote'
import useGenerateRandomColor from './hooks/useGenerateRandomColor'

import './App.css'
import 'animate.css'

function App() {
  const {color, generateColor} = useGenerateRandomColor();

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [quotes, setQuotes] = React.useState([]);
  const [index, setIndex] = React.useState(0);
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
    let newIndex = Math.floor(Math.random() * 101);
    setIndex(newIndex);
    generateColor();
    document.body.style.backgroundColor = color;
  }

  return (
    !isLoaded ? <div>Loading</div> :
    <div className="App">
      <Quote
        quote={quotes[index].quote}
        author={quotes[index].author}
        handleClick={handleClick}
        color={color}
      />
    </div>
  )
}

export default App
