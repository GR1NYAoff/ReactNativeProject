import React, {Component} from 'react';
import {View} from 'react-native';
import {Post} from './components/Post';
export default class App extends Component {
  render() {
    return (
      <View>
        <Post
          title="some"
          imageUrl="https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg"
          createdAt="22.11.2022"
        />
      </View>
    );
  }
}
