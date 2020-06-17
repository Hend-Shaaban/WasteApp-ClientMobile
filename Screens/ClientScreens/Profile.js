import React from 'react'
import {Content, Container, Button, Thumbnail, Icon, Header, Left, Right, Body, List, ListItem, Item, Spinner, Card, CardItem } from 'native-base'
import { TouchableHighlight ,StyleSheet,Text,
    View,
    Image,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
//import jwt_decode from 'jwt_decode';
import AsyncStorage from'@react-native-community/async-storage'

import axios from 'axios'


export default class Profile extends React.Component {
   
    state = {
        Data: null
    }
    componentDidMount() {
        this.getDataFromJson();
    };
    async getDataFromJson() {
      //let ClientID=JSON.parse(await AsyncStorage.getItem("UserId"));
      //  let decodedToken=jwt_decode(accessToken);
      //  let CollectorID=decodedToken.UserId;
     //   alert("Wait until All Departments Loaded");
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) => res.json())
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({
        //             Data: res
        //         })
        //     })
        //     .catch((error) => console("Error", error))

        fetch(`http://10.0.2.2:8585/api/Client/getClientData/${1}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            this.setState({
                Data: res,
               
               
            })
         
        })
        .catch((error) => console.log("Error", error))
        //alert(this.state.Data);
    }
    
  
    
    render() {
        if (this.state.Data == null) {
            return (
                <Container>
                    <Content>
                     {/* <Text>Loading.....</Text> */}
                     <Spinner/>
                    </Content>
                </Container>
            )
        }
        else {
         //   <Thumbnail source={require("./1.jpg")} />
            // return (
            //     <View style={styles.container}>
            //         <View style={styles.header}>
            //           <View style={styles.headerContent}>
            //               <Image style={styles.avatar}
            //                 source={require("./1.jpg")}/>
          
            //               <Text style={styles.name}>{this.state.Data.userName}</Text>
            //               <Text style={styles.userInfo}>{this.state.Data.email} </Text>
            //               <Text style={styles.userInfo}>{this.state.Data.phoneNumber} </Text>
            //           </View>
            //         </View>
          
            //         <View style={styles.body}>
                      
          
                     
          
                     
                     
          
            //         </View>
            //     </View>
            //   );
            return (

                <View style={styles.container}>
                <View style={styles.header}>
                       <View style={styles.headerContent}>
 
                         <Image style={styles.avatar}
                          source={require("../assets/Images/1.jpg")}/>
        {/* <Left><Text style={styles.name}>Email: </Text></Left> */}

                     </View>
                     </View>
           
                     {/* <View style={styles.body}>    */}
                     {this.state.Data.map((item) => {
                             return (
                                 <Card style={{width:400, height:800,backgroundColor: "#a1dd70", margin:9}}>
                                     <CardItem style={{backgroundColor: "#a1dd70"}}>
                                     
                                     <Body>
                                     <Text style={styles.name}>{item.clientName}</Text>
                                     </Body>
                                     </CardItem>
                                     <CardItem style={{backgroundColor: "#a1dd70"}}>
                                     {/* <Left><Text style={styles.name}>Email: </Text></Left> */}
                                     <Body>
                                     <Text style={styles.name}>{item.email}</Text>
                                     </Body>
                                     </CardItem>
                                     <CardItem style={{backgroundColor: "#a1dd70"}}>
                                     {/* <Left><Text style={styles.name}>Email: </Text></Left> */}
                                     <Body>
                                     <Text style={styles.name}>Total Points : {item.totalPoints}</Text>
                                     </Body>
                                     </CardItem>
                                     <CardItem style={{backgroundColor: "#a1dd70"}}>
                                     {/* <Left><Text style={styles.name}>Phone: </Text></Left> */}
                                     <Body>
                                     <Text style={styles.name}>{item.mobile}</Text>
                                     </Body>
                                     </CardItem>
                                     <CardItem style={{backgroundColor: "#a1dd70"}}>
                                     {/* <Left><Text style={styles.name}>Phone: </Text></Left> */}
                                     <Body>
                                     <Text style={styles.name}>{item.apartmentNumber},{item.name},{item.streetName}</Text>
                                   
                                     </Body>
                                     </CardItem>
                                     
                                    {/* <Text>{item.ClientID}</Text> */}
                               
                               
                      <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=>this.props.navigation.navigate("Edit Profile",{ListScreen:item.mobile,ProfileScreen:this})}>
                      <Text style={styles.signUpText}>Update Profile</Text>
   
                                 {/* <Icon name="ios-arrow-forward" />  */}
                                </TouchableHighlight>
                                
                               
                                 </Card>
                             )
                             
                         }
                         )}
                          
                     {/* </View> */}
                 
                 </View> 
            );
        }
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#d1eaa3",
        // height:200,
      },
      headerContent:{
        padding:10,
       
     //   alignItems: 'center',
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
      
      },
      name:{
        fontSize:20,
        color:"#000000",
        fontWeight:'900',
        marginLeft:130,
        marginTop:-160,
      //  marginBottom:90
       
      },
      userInfo:{
        marginLeft:50,
        fontSize:17,
        color:"#717D7E",
        fontWeight:'900',
       
      },
      body:{
        backgroundColor: "#a1dd70",
        height:500,
        alignItems:'center',
      },
      container:{
        backgroundColor: "#a1dd70"
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        marginLeft:70,
      },
      signupButton: {
        backgroundColor: "#249C07",
      },
      signUpText: {
        color: 'white',
        fontSize: 20,
      }
    //   item:{
    //     flexDirection : 'row',
    //   },
    //   infoContent:{
    //     flex:1,
    //     alignItems:'flex-start',
    //     paddingLeft:5
    //   },
    //   iconContent:{
    //     flex:1,
    //     alignItems:'flex-end',
    //     paddingRight:5,
    //   },
    //   icon:{
    //     width:30,
    //     height:30,
    //     marginTop:20,
    //   },
    //   info:{
    //     fontSize:18,
    //     marginTop:20,
    //     color: "#FFFFFF",
    //   }
});