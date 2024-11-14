import React from 'react'
import { View,Text,Dimensions,StyleSheet,TouchableOpacity,Image ,TextInput, ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';


const ButtonComponent = ({ title, onPress, buttonStyle, textStyle,navigation }) => {
  return (
    <TouchableOpacity className='w-[220px] h-[64px] rounded-[80px] my-8' style={[styles.button]}
    onPress={() => navigation.navigate('live')}>
      <LinearGradient
        colors={['#FA457E', '#7B49FF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
        className=' w-full h-[65px] bg-black flex flex-row justify-end items-center'
        
      >
       <Text className='py-1 text-lg text-[18px] font-[600]' style={styles.buttonText} onPress={() => navigation.navigate('live')}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
      overflow: 'hidden',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
      },
    gradient: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });