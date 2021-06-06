import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import EmojiCard from './EmojiCard';
/*
Filtering functionality for emoji annotations (name)
matching anywhere in the name
Input field no submit button (live search)
*/

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

  const filterEmojis = (emojis, word) => {
    let result = emojis.filter((emoji) => emoji.annotation.toLowerCase().includes(word.toLowerCase()))
    return result
  }

  const handleTextChange = (event) => {
    let text = event.target.value
    setFilterText(text)
    setFilteredEmojis(filterEmojis(emojis, text))
  }

  return (
    <div className="App ui container">
      <h1>Emoji App</h1>
      <p>This App displays a list of all available emojis thanks to <a href="emojibase.dev">Emojibase.dev</a></p>
      <input
        type="text"
        placeholder="Search for an emoji"
        style={{ textAlign: "center" }}
        onChange={handleTextChange}
        value={filterText}
      />
      <div className="ui cards centered" >
        {filteredEmojis.map(emoji => <EmojiCard key={emoji.hexcode} emoji={emoji} />)}
      </div>
    </div>
  );
}

export default App;
