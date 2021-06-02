import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import EmojiCard from './EmojiCard';

const App = () => {
  const [emojis, setEmojis] = useState([])
  const [filteredEmojis, setFilteredEmojis] = useState([])
  const [filterText, setFilterText] = useState("")

  useEffect(() => {
    const fetchAllEmojis = async () => {
      try {
        let { data } = await axios.get('https://raw.githubusercontent.com/milesj/emojibase/master/packages/data/en/data.raw.json')
        setEmojis(data)
        setFilteredEmojis(data)
      } catch (err) {
        window.alert('There was an error')
        console.log(err)
      }
    }
    fetchAllEmojis()
  }, [])

  const handleSearchClick = (e) => {
    let filtered = emojis.filter(emoji => emoji.annotation.includes(filterText))
    setFilteredEmojis(filtered)
  }

  return (
    <div className="App ui container">
      <h1>Emoji App</h1>
      <p>This App displays a list of all available emojis thanks to <a href="emojibase.dev">Emojibase.dev</a></p>
      <div className="ui action input">
        <input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <button className="ui button" onClick={handleSearchClick}>Search</button>
      </div>
      <div className="ui divider"></div>
      <div className="ui cards centered">
        {filteredEmojis.map(emoji => <EmojiCard key={emoji.hexcode} emoji={emoji} />)}
      </div>
    </div>
  );
}

export default App;
