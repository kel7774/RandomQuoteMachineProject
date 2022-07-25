import React from 'react';
import QuoteWrapper from '../styles/Quote';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'

function Quote({quote, author, handleClick}) {
  return (
    <QuoteWrapper id="quote-box">
      <div className="text-wrapper">
        <p className="animate__animated animate__fadeIn" id="text">
          <span><FontAwesomeIcon icon={faQuoteLeft}/></span>
            {quote}
          <span><FontAwesomeIcon icon={faQuoteRight}/></span>
        </p>
        <p className="animate__animated animate__fadeInLeft" id="author">{author}</p>
        <a href="#" id="tweet-quote"></a>
        <button id="new-quote" onClick={handleClick}>Generate New Quote</button>
      </div>
    </QuoteWrapper>
  )
}

export default Quote;
