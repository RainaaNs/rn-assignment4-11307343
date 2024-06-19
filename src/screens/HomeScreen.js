import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import JobCard from '../components/JobCard';



const HomeScreen = ({route}) => {
  const { name, email } = route.params;
  const jobData = [
    {backgroundColor: '#5386E4',
      renderComponent: 
      <View style={{padding:8}}>
        <View style={{flexDirection:'row'}}>
          <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:23, height:23}} source={require('../assets/facebook.png')}/>
          </View>
          <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
            <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Software Engineer</Text>
            <Text style={{fontSize:14, color:'white', fontFamily:'Poppins-Regular'}}>Facebook</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:70}}>
          <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$180,000</Text>
          <Text style={{marginLeft:62, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Accra, Ghana</Text>    
        </View>
      </View>
      ,
    },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent:
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23, height:23}} source={require('../assets/google.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Data Scientist</Text>
          <Text style={{fontSize:14, color:'white', fontFamily:'Poppins-Regular'}}>Google</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$160,000</Text>
        <Text style={{marginLeft:55, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Kumasi, Ghana</Text>    
      </View>
    </View>
     },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent: 
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23, height:23}} source={require('../assets/apple.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Product Manager</Text>
          <Text style={{fontSize:14, color:'white', fontFamily:'Poppins-Regular'}}>Apple</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$120,000</Text>
        <Text style={{marginLeft:70, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Aburi, Ghana</Text>    
      </View>
    </View>
     },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent:
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'black', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:28, height:28}} source={require('../assets/spotify.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold', color:'white'}}>UX Designer</Text>
          <Text style={{fontSize:14, color:'white',fontFamily:'Poppins-Regular'}}>Spotify</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$110,000</Text>
        <Text style={{marginLeft:50, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Takoradi, Ghana</Text>    
      </View>
    </View> 
    },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent: 
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23, height:23}} source={require('../assets/amazon.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Frontend Developer</Text>
          <Text style={{fontSize:14, color:'white',fontFamily:'Poppins-Regular'}}>Amazon</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$185,000</Text>
        <Text style={{marginLeft:38, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Techiman, Ghana</Text>    
      </View>
    </View>
    },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent: 
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23, height:23}} source={require('../assets/burgerss.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>DevOps Engineer</Text>
          <Text style={{fontSize:14, color:'white',fontFamily:'Poppins-Regular'}}>Burger King</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$190,000</Text>
        <Text style={{marginLeft:66, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Kasoa, Ghana</Text>    
      </View>
    </View>
    },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent: 
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:25, height:25}} source={require('../assets/beats.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Cybersecurity Analyst</Text>
          <Text style={{fontSize:14, color:'white',fontFamily:'Poppins-Regular'}}>Beats</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$135,000</Text>
        <Text style={{marginLeft:32, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Akosombo, Ghana</Text>    
      </View>
    </View>
    },

    { jobTitle: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', backgroundColor: '#04284A',
      renderComponent: 
      <View style={{padding:9}}>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'white', borderRadius:15, width:46, height:46, justifyContent:'center', alignItems:'center'}}>
          <Image style={{width:23, height:23}} source={require('../assets/airbnb.png')}/>
        </View>
        <View style={{flexDirection:'column', marginLeft:16, marginTop:2}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold',  color:'white'}}>Business Analyst</Text>
          <Text style={{fontSize:14, color:'white',fontFamily:'Poppins-Regular'}}>Airbnb</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', marginTop:70}}>
        <Text style={{fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>$85,000</Text>
        <Text style={{marginLeft:68, fontSize:15, color:'white', fontFamily:'Poppins-Medium'}}>Kwahu, Ghana</Text>    
      </View>
    </View>
    },
  ];



  return (
    <View style={{backgroundColor:'white', flex:1}}>
     <View style={{flexDirection:'row', marginTop:-10, maxWidth:355, justifyContent:'space-between'}}>

        <View style={{marginLeft:26, marginTop:20}}>
          <Text style={{fontSize:24, fontFamily:'Poppins-Bold'}}>{name}</Text>
          <Text style={{fontSize: 20, color:'#95969D', fontFamily:'Poppins-Regular', marginTop:-7}}>{email}</Text>
        </View>
        
        <View style={{marginTop:30}}>
          <Image style={{width:55, height:55, borderRadius:30}} source={require('../assets/download.png')}/>
            <View style={{backgroundColor:'#FC1010', 
                          height:20, 
                          width:20, 
                          borderRadius:15, 
                          alignSelf:'center', 
                          justifyContent:'center', 
                          borderWidth:5, 
                          borderColor:'white',
                          marginLeft:38,
                          marginTop:-55}}>
            </View>
        </View>
      
     </View>
     
     <View style={{flexDirection:'row', marginTop:30}}>
        <View style={{marginLeft:25, flexDirection:'row', backgroundColor:'#F2F2F3', width:255, height:48, borderRadius:16 }}>
            <Feather name="search" size={24} color="#95969D" style={{marginLeft:22, marginTop:13}} />    
            <TextInput style={{marginTop:1, 
                            marginLeft:9,
                            maxWidth:200, 
                            opacity:0.6,
                            fontSize:15}} 
                            placeholder='Search a job or position'                 
            />
        </View>
        <View style={{backgroundColor:'#F2F2F3', width:48, height:48, borderRadius:16, marginLeft:23}}>
          <Image style={{width:20, height:25, marginLeft:14, marginTop:12}} source={require("../assets/sliders.png")}/>
        </View>
     </View>

     <View style={{marginLeft:18, marginTop:34, marginRight:18}}>
        <View style={{flexDirection:'row', marginLeft:6, marginBottom:14}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold'}}>Featured Jobs</Text>
          <Text style={{fontSize:14, color:'#95969D', marginLeft:180, fontFamily:'Circular-Regular'}}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {jobData.map((job, index) => (
              <JobCard
                key={index}
                backgroundColor={job.backgroundColor}
                renderComponent={job.renderComponent}
              />
            ))}
          </ScrollView>

     </View>

     <View>
        <View style={{flexDirection:'row', marginLeft:26, marginTop:21, marginBottom:17}}>
          <Text style={{fontSize:16, fontFamily:'Poppins-SemiBold'}}>Popular Jobs</Text>
          <Text style={{fontSize:14, color:'#95969D', marginLeft:172, fontFamily:'Circular-Regular'}}>See all</Text>
        </View>
     </View>

     <View style={{marginTop:-3}}>
        <View style={{marginHorizontal:25, padding:15, flexDirection:'row', backgroundColor:'#FFFFFF', elevation:1, maxwidth:327, height:74, borderRadius:16, marginBottom:6 }}>
            <View>
              <Image style={{width:43, height:43}} source={require('../assets/burgerss.png')}/>
            </View>
            <View style={{flexDirection:'column', marginLeft:14}}>
              <Text style={{fontSize:14, fontFamily:'Poppins-SemiBold'}}>Jr Executive</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular'}}>Burger King</Text>
            </View>
            <View style={{flexDirection:'column', marginLeft:69, marginTop:3}}>
              <Text style={{fontSize:12, marginLeft:33, fontFamily:'Poppins-Medium'}}>$96,000/y</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular'}}>Los Angels, US</Text>
            </View>   
        </View>

        <View style={{marginHorizontal:25, padding:15, flexDirection:'row', backgroundColor:'#FFFFFF', elevation:1, maxwidth:327, height:74, borderRadius:16, marginBottom:6 }}>
            <View>
              <Image style={{width:43, height:43}} source={require('../assets/beats.png')}/>
            </View>
            <View style={{flexDirection:'column', marginLeft:14}}>
              <Text style={{fontSize:14, fontFamily:'Poppins-SemiBold'}}>Product Manager</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular'}}>Beats</Text>
            </View>
            <View style={{flexDirection:'column', marginLeft:56, marginTop:3}}>
              <Text style={{fontSize:12, marginLeft:9, fontFamily:'Poppins-Medium'}}>$84,000/y</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular' }}>Florida, US</Text>
            </View>
        </View>

        <View style={{marginHorizontal:25, padding:15, flexDirection:'row', backgroundColor:'#FFFFFF', elevation:1, maxwidth:327, height:74, borderRadius:16, marginBottom:6 }}>
            <View>
              <Image style={{width:43, height:43}} source={require('../assets/facebook.png')}/>
            </View>
            <View style={{flexDirection:'column', marginLeft:14}}>
              <Text style={{fontSize:14, fontFamily:'Poppins-SemiBold'}}>Product Manager</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular'}}>Facebook</Text>
            </View>
            <View style={{flexDirection:'column', marginLeft:33, marginTop:3}}>
              <Text style={{fontSize:12, marginLeft:30, fontFamily:'Poppins-Medium'}}>$96,000/y</Text>
              <Text style={{fontSize:13, opacity:0.5, fontFamily:'Poppins-Regular'}}>Los Angels, US</Text>
            </View>
            
        </View>
        


     </View>
      
     
       
     </View>
  )
}

export default HomeScreen;


