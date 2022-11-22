import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Post} from './components/Post';

export default function App() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://637cd83716c1b892ebc0da42.mockapi.io/api/articles')
      .then(({data}) => {
        setPosts(data);
      })
      .catch(err => {
        Alert.alert('Error');
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{marginTop: 15}}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({item}) => (
          <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        )}
      />
    </View>
  );
}
