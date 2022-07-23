import React from 'react';
import QuoteWrapper from '../styles/Quote';

function Quote({quote, author, handleClick}) {
  return (
    <QuoteWrapper id="quote-box">
      <p className="animate__animated animate__fadeIn" id="text">{quote}</p>
      <p className="animate__animated animate__fadeInLeft" id="author">{author}</p>
      <a href="#" id="tweet-quote"></a>
      <button id="new-quote" onClick={handleClick}>Generate New Quote</button>
    </QuoteWrapper>
  )
}

export default Quote;
