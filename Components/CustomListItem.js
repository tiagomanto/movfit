import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import { db} from '../firebase'

const CustomListItem = ({id, chatName, enterChat}) => {
    const [chatMessages, setMessages]=useState([]);

    useEffect(()=>{
        const unsubscrible = db
            .collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>
               setMessages(snapshot.docs.map((doc) => doc.data()))
        );
        return unsubscrible;
    })

    return (
    <ListItem 
        key={id}
        onPress={()=>enterChat(id,chatName)} 
        bottomDivider>

           <Avatar
           rounded
           source={{
               uri:chatMessages?.[0]?.photoURL ||
               "https://avatars.githubusercontent.com/u/17864074?s=400&u=c56e7805f888dc445cc3a17b16f204a204d589c1&v=4"
           }}/>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight:"800"}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                        {chatMessages?.[0]?.displayName}:
                        {chatMessages?.[0]?.message}
                </ListItem.Subtitle>


            </ListItem.Content>
        </ListItem>

    )
}

export default CustomListItem

const styles = StyleSheet.create({})
