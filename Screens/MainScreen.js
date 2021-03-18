import React, { useState } from "react";
import FeedRoute from "./FeedScreen";
import LessonsRoute from "./LessonsScreen";
import ChatRoute from "./RecentScreen";
import HomeScreen from "./HomeScreen"
import { BottomNavigation } from "react-native-paper";

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Screen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home", color: "#795548" },
    { key: "feeds", title: "Feeds", icon: "message", color: "#3F51B5" },
    { key: "lessons", title: "Aulas", icon: "video", color: "#009688" },
    { key: "chat", title: "Chat", icon: "chat", color: "#795548" },


  ]);

  const renderScene = BottomNavigation.SceneMap({
    feeds: FeedRoute,
    lessons: LessonsRoute,
    chat: ChatRoute,
    home: HomeScreen
  });

  return (

    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Screen;