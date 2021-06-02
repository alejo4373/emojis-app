import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import EmojiCard from './EmojiCard';

const App = () => {
  const [emojis, setEmojis] = useState([])
  useEffect(() => {
    const fetchAllEmojis = async () => {
      try {
        let { data } = await axios.get('https://raw.githubusercontent.com/milesj/emojibase/master/packages/data/en/data.raw.json')
        setEmojis(data)
      } catch (err) {
        window.alert('There was an error')
        console.log(err)
      }
    }
    fetchAllEmojis()
  }, [])
  return (
    <div className="App">
      {emojis.map(emoji => <EmojiCard emoji={emoji} />)}
    </div>
  );
}

export default App;
