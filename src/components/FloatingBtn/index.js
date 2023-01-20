import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native';

const FloatingBtn = ({toggle, isOpen}) => {
  return (
    
       <Pressable onPress={toggle} style={styles.btn}>
        <Text style={styles.text}>{isOpen ? "x" : "+"}</Text>
      </Pressable>
    
  )
}

const styles = StyleSheet.create({
    btn: {
      position: 'absolute',
      right: 20,
      top : 50,
      backgroundColor : "orange",
      borderRadius : 40,
      height: 40,
      width: 40,
      justifyContent : 'center'
    },
    text : {
        textAlign : 'center',
        fontSize : 20,
        color  :"white",
        fontWeight :"bold"
    }
  });
export default FloatingBtn
