import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import axios from 'axios';
import {Post} from './components/Post';

export default function App() {
  const [posts, setPosts] = useState();
  const fetchPosts = () => {
    axios
      .get('https://637cd83716c1b892ebc0da42.mockapi.io/api/articles')
      .then(({data}) => {
        setPosts(data);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error');
      });
  };

  useEffect(fetchPosts, []);

  return (
    <View>
      {posts?.map(post => (
        <Post
          key={post.id}
          title={post.title}
          imageUrl={post.imageUrl}
          createdAt={post.createdAt}
        />
      ))}
    </View>
  );
}
