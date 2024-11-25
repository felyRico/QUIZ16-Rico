import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMicrophone, faSmile, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import './Timeline.css';

const generateDefaultPfp = (username) => {
  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div className="default-pfp">
      {firstLetter}
    </div>
  );
};

const Timeline = ({ user }) => {
  const [tweets, setTweets] = useState([
    { id: 1, username: 'jojoruski', content: 'Makan apa nich', likes: 10, comments: 10, shares: 10, time: '40 days ago' },
    { id: 2, username: 'jojoruski', content: 'Selamat malam', likes: 9, comments: 10, shares: 10, time: '40 days ago' },
  ]);
  const [tweetContent, setTweetContent] = useState('');

  const handleInteraction = (id, type) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, [type]: tweet[type] + 1 } : tweet
      )
    );
  };

  const handleTweetChange = (e) => {
    setTweetContent(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweetContent.trim()) {
      setTweets([
        ...tweets,
        {
          id: tweets.length + 1,
          username: user.username,
          content: tweetContent,
          likes: 0,
          comments: 0,
          shares: 0,
          time: 'Just now',
        },
      ]);
      setTweetContent('');
    }
  };

  return (
    <div className="timeline">
      {/* Create Tweet Section */}
      <div className="create-tweet">
        <div className="create-tweet-header">
          {generateDefaultPfp(user.username)}
          <textarea
            placeholder="What happened today?"
            maxLength={150}
            value={tweetContent}
            onChange={handleTweetChange}
          />
        </div>
        <div className="tweet-meta">
          <span>{tweetContent.length}/150</span>
        </div>
        <div className="tweet-actions">
          <div className="tweet-icons">
            <div className="icon-group">
              <button>
                <FontAwesomeIcon icon={faImage} className="icon" />
              </button>
              <button>
                <FontAwesomeIcon icon={faMicrophone} className="icon" />
              </button>
            </div>
            <div className="icon-group">
              <button>
                <FontAwesomeIcon icon={faSmile} className="icon" />
              </button>
            </div>
          </div>
          <button className="share-button" onClick={handleTweetSubmit}>
            Share
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="tweets">
        <h3>What's happening</h3>
        {tweets.map((tweet) => (
          <div key={tweet.id} className="tweet">
            <div className="tweet-header">
              {generateDefaultPfp(tweet.username)}
              <p>
                <strong>{tweet.username}</strong> - {tweet.time}
              </p>
            </div>
            <p>{tweet.content}</p>
            <div className="tweet-interactions">
              <button onClick={() => handleInteraction(tweet.id, 'likes')}>
                <FontAwesomeIcon icon={faThumbsUp} className="icon" /> {tweet.likes}
              </button>
              <button onClick={() => handleInteraction(tweet.id, 'comments')}>
                <FontAwesomeIcon icon={faComment} className="icon" /> {tweet.comments}
              </button>
              <button onClick={() => handleInteraction(tweet.id, 'shares')}>
                <FontAwesomeIcon icon={faShare} className="icon" /> {tweet.shares}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
