import React, {useState} from "react";
import { View, Text, TextInput, Pressable, Image} from "react-native";
//import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home', { name, email }); 
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     {/* <StatusBar style={{backgroundColor:'white'}}/> */}
     <View>
        <View style={{marginLeft:25, marginTop:45}}>
          <View><Text style={{fontSize:22, color:'#356899', marginTop:10, fontFamily:'Poppins-SemiBold'}}>Jobizz</Text></View>
          <View><Text style={{fontSize:24, marginTop:3, fontFamily:'Poppins-SemiBold' }}>Welcome Back 👋</Text></View>
          <View><Text style={{fontSize:14, opacity:0.5, marginTop:3, fontFamily:'Poppins-Regular'}}>Let’s log in. Apply to jobs!</Text></View>
          <View><TextInput 
                 value={name} 
                 onChangeText={setName} 
                 placeholder="Name"
                 style={{borderWidth:1, borderRadius: 11, padding: 12, marginTop:40, marginRight:25, opacity:0.45}}
                 />
          </View>
          <View><TextInput
                 value={email}
                 onChangeText={setEmail}
                 placeholder="Email"
                 style={{ borderWidth: 1, borderRadius: 11, padding: 12, marginTop:15, marginRight:25, opacity:0.45 }}
                />
          </View>
          <View>
            <Pressable onPress={handleLogin}
                       style={{borderWidth: 1, borderRadius: 5, borderColor:'#356899', padding: 16, marginTop:30, marginRight:25, backgroundColor:'#356899'}}>
              <Text style={{alignSelf:'center', color:'white', fontSize:16, fontFamily:'Poppins-Medium'}}>Log in</Text>
            </Pressable>
          </View>
        </View>

          <View style={{marginTop:70, marginHorizontal:25, flexDirection:"row"}}>
            <View style={{height:1, width:100, backgroundColor:'#AFB0B6'}}></View>
            <View>
              <Text style={{marginHorizontal:20, marginTop:-10, fontSize:13, color:'#AFB0B6', fontFamily:'Circular-Regular'}}>Or continue with</Text>
            </View>
            <View style={{height:1, width:100, backgroundColor:'#AFB0B6' }}></View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent:'space-around', width:270, marginLeft:56, marginTop:35 }}>
           <View style={{backgroundColor:'white', borderRadius:30, width:56, height:56, elevation:1, justifyContent:'center', alignItems:'center'}}><Image style={{width:26, height:26}} source={require('../assets/apple.png')}/></View>
           <View style={{backgroundColor:'white', borderRadius:30, width:56, height:56, elevation:1, justifyContent:'center', alignItems:'center'}}><Image style={{width:25, height:25}} source={require('../assets/google.png')}/></View>
           <View style={{backgroundColor:'white', borderRadius:30, width:56, height:56, elevation:1, justifyContent:'center', alignItems:'center'}}><Image style={{width:25, height:25}} source={require('../assets/facebook.png')}/></View>
          </View>

          <View style={{marginLeft:100, marginTop:50}}>
            <Text style={{fontSize:14, color:'#BDBEC2', fontFamily:'Circular-Regular'}}>Haven’t an account? <Text style={{color:'#356899'}}>Register</Text></Text>
          </View>



      </View>
    </View>
   
  )
}

export default LoginScreen;