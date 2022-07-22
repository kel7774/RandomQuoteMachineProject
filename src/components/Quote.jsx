import React from 'react';

function Quote({quote, author, handleClick}) {
  return (
    <div id="quote-box"> {/* should be horizontally centered */}
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <a href="#" id="tweet-quote"></a>
      <button id="new-quote" onClick={handleClick}>Generate New Quote</button>
    </div>
  )
}

export default Quote;
