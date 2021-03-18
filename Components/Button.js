import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  List,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
const TouchableOpacityButton = ({texto}) => {

  return (
    
    <TouchableOpacity
      
  >

      <Card>
        <Card.Content>
          <Title>Applicaton</Title>
          <Paragraph>changing theme and routes</Paragraph>
          
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text></Text>
        </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableOpacityButton;