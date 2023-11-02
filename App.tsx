import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';
import { twitterConfig } from './Config';
import { TwitterTweet } from './TwitterTypes';

function App() {
  const [tweets, setTweets] = useState<TwitterTweet[]>([]);

  useEffect(() => {
    // Fetch Twitter tweets
    axios
      .get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
        params: {
          screen_name: '1716730993867128832Himansh1985', // Replace with the Twitter username you want to fetch tweets from
          count: 1, // Number of tweets to fetch
        },
        headers: {
          Authorization: `Bearer ${twitterConfig.consumer_key}`,
        },
      })
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
    
      <Text>Twitter Tweets</Text>
      
        {tweets.map((tweet) => (
       <li key= { tweet.id}>{tweet.text}</li>
        ))}
    
    
    </View>
  );
  
        }
        
export default App;