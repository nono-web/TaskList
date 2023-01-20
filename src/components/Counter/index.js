import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Counter = ({title, nb}) => {
  return (
    <View>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
nb : {
    fontWeight  :"bold",
    fontSize : 20,
},
title : {
    fontWeight  :"bold",
    fontSize : 16,
    color : "grey"
}
  });
export default Counter
