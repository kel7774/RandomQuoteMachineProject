import React from 'react'

import './App.css'
import 'animate.css'
import Quote from './components/Quote'



function App() {
  let randomColor = `rgb( ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [quotes, setQuotes] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [, setError] = React.useState(null);

  function changeColor() {
    document.body.style.backgroundColor=randomColor;
  }

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
    changeColor();
  }

  console.log('randomColor in App', randomColor)

  return (
    !isLoaded ? <div>Loading</div> :
    <div className="App">
      <Quote
        quote={quotes[index].quote}
        author={quotes[index].author}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
