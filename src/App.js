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
    <div className="App ui container">
      <h1>Emoji App</h1>
      <p>This App displays a list of all available emojis thanks to <a href="emojibase.dev">Emojibase.dev</a></p>
      <div className="ui cards centered">
        {emojis.map(emoji => <EmojiCard key={emoji.hexcode} emoji={emoji} />)}
      </div>
    </div>
  );
}

export default App;
