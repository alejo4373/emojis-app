import React from 'react'

const EmojiCard = ({ emoji }) => {
  return (
    <div className="card">
      <div className="image">
        <h2 style={{ fontSize: "5em" }}>{emoji.emoji}</h2>
      </div>
      <div className="content">
        <h3>{emoji.annotation}</h3>
        <div className="ui circular labels">
          <p>{emoji.tags?.map(tag => <span key={tag} className="ui label">{tag}</span>)}</p>
        </div>
      </div>
    </div>
  )
}

export default EmojiCard
