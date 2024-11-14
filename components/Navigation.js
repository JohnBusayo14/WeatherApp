import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Live from '../screens/Live';
import Homescreen from '../screens/Homescreen';
import Splashscreens from '../screens/Splashscreens';
import Loginscreen from '../screens/Loginscreen';
import Reset from '../screens/Reset';
import Signup from '../screens/Signup';
import Newchat from '../screens/Newchat';
import CallsScreen from '../screens/CallsScreen';
import RandomCallScreen from '../screens/RandomCallScreen';
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Chat from '../screens/Chat';
import Icon from 'react-native-vector-icons/Ionicons';

const Navigation = ({navigation}) => {
  return (

   <View className='w-full h-20 flex flex-row justify-center items-center'>
   <TouchableOpacity className='w-[375px] h-[65px] flex flex-row rounded-[30px] justify-around items-center border-spacing-3 border-[#47307A] border bg-white' >
   <Icon name='compass-outline' size={28} color='black'   onPress={() => navigation.navigate('randomcall')}/>
   <Icon name='person-outline' size={28} color= 'black'  onPress={() => navigation.navigate('profile')} />
   <Icon name='play-circle-outline' size={28} color= 'black'  onPress={() => navigation.navigate('live')} />
   <Icon name='chatbubble-outline' size={28} color= 'black'   onPress={() => navigation.navigate('newchat')}/>
   <Icon name='call-outline' size={28} color=' black'  onPress={() => navigation.navigate('call')} />
   
   </TouchableOpacity>
   </View>
  )
}

export default Navigation