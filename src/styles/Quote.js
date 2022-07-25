import styled from 'styled-components'

const QuoteWrapper = styled.div`
  background-color: white;
  color: black;
  width: 40em;
  height: 20em;
  border-radius: 10px;
  box-shadow: 7px 7px black;
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    p {
      font-size: 25px;
        span:first-child {
          padding-right: 0.5em;
        }
        span:nth-child(2) {
          padding-left: 0.5em;
        }
    }
    button {
      text-transform: uppercase;
    }
`;

export default QuoteWrapper;
