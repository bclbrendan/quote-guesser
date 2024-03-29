import React from 'react';
import { useState, useEffect } from 'react';
import { getRhyme } from './APIs/rhymeFetch';
import { selectWord } from './selectWord';




const CallRhyme = (response) => { 
  const [rhymeResponse, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  let rhymeQuote = response.quote
  let rhymeWord = selectWord(rhymeQuote)
  
  useEffect(() => {
    fetchRhyme()
    }, [])
  

  const fetchRhyme = async () => {
  try{
    console.log(rhymeWord)
    const responses = await getRhyme(rhymeWord)
    console.log(responses)
    setLoading(false)
    setResponse(responses.data)
    }catch(e){
    console.error(e)
    }

  
  }
  return (
  
  <div>
    <h1>RHYME CALL</h1>
    <p>{loading? "loading" : "done"}</p>
      {!loading && <h2>{JSON.stringify(rhymeResponse[0]) }</h2>}
  </div>
  );
}

export default CallRhyme
