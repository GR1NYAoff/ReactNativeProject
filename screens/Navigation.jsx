import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { PostList } from "./PostList";

const Stack = createNativeStackNavigator();

// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostList"
          component={PostList}
          options={{ title: "List" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{ title: "Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
