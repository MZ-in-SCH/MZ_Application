import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function UserInfoBoxComponet() {
  return (
    <View style={styles.box}>
      <View />
      <View style={styles.iconNInfos}>
        <Image source={require('../assets/icon.png')} style={styles.icon}/>
        <View style={styles.infos}>
          <Text style={styles.font}>아이디</Text>
          <Text style={styles.font}>지역</Text>
          <Text style={styles.font}>나이</Text>
        </View>
      </View>
      <View style={styles.intersets}>
        <Text style={styles.font}>관심 분야  </Text>
        <Text style={styles.font}>#관심분야</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    borderWidth : 2,
    borderRadius : 40,
    marginTop : 50,
    height : '25%',
    alignItems : "center",
    justifyContent : "space-between"
  },
  iconNInfos : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  icon : {
    borderWidth : 3,
    borderColor : "black",
    borderRadius : 50,
    width : 50,
    height : 50,
    marginRight : 10
  },
  infos :{
    justifyContent : 'space-between'
  },
  font : {
    fontSize : 15,
    fontWeight : '500' 
  },
  intersets : {
    flexDirection : 'row',
    marginBottom : 20
  }
})