import React from 'react'

const EmojiCard = ({ emoji }) => {
  return (
    <div>
      <h2>{emoji.emoji}</h2>
      <p>{emoji.annotation}</p>
    </div>
  )
}

export default EmojiCard
