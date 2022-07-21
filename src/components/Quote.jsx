import React from 'react';

function Quote({author, quote}) {
  return (
    <div id="quote-box"> {/* should be horizontally centered */}
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <a href="#" id="tweet-quote"></a>
      <button id="new-quote">Generate New Quote</button>
    </div>
  )
}

export default Quote;
