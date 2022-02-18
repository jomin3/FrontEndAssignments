import React, { useState } from "react";
import Tweets from "./tweets";
const Tweet = () => {
  const [tweets, settweet] = useState([
    {
      id: 1,
      name: "Elon Musk",
      twitterhandle: "elonmusk",
      tweet: "Lorem ipsum dolor sit",
      likes: 0,
    },
    {
      id: 2,
      name: "Jeff Bezos",
      twitterhandle: "jeffbezos",
      tweet: "Lorem ipsum dolor sit",
      likes: 0,
    },
    {
      id: 3,
      name: "Mukesh Ambani",
      twitterhandle: "mukambani",
      tweet: "Lorem ipsum dolor sit",
      likes: 0,
    },
    {
      id: 4,
      name: "Gautam Adani",
      twitterhandle: "gautamadani",
      tweet: "Lorem ipsum dolor sit",
      likes: 0,
    },
  ]);
  const handleLike = (id) => {
    const latestState = [...tweets];
    const index = tweets.findIndex((el) => el.id === id);
    latestState[index].likes += 1;
    settweet(latestState);
  };
  const handleDisLike = (id) => {
    const latestState = [...tweets];
    const index = tweets.findIndex((el) => el.id === id);
    latestState[index].likes -= 1;
    settweet([...tweets], (tweets[index].likes -= 1));
  };
  const renderTweets = () => {
    return tweets.map((item) => {
      return (
        <Tweets
          tweet={item}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
        />
      );
    });
  };
  return <>{renderTweets()}</>;
};

export default Tweet;
