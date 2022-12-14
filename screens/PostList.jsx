import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Post } from "../components/Post";
import { Loading } from "../components/Loading";

export const PostList = ({ navigation }) => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://637cd83716c1b892ebc0da42.mockapi.io/api/articles")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        Alert.alert("Error");
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullPost", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PostList;
