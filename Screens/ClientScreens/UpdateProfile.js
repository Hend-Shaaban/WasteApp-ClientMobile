import React from 'react'
import { Container, Header, Form, Content, Item, Label, Input, Button, Body,Icon , CheckBox,ListItem} from 'native-base'
import {StyleSheet,TextInput,View ,TouchableHighlight,Text} from 'react-native'
import axios from 'axios'
import AsyncStorage from'@react-native-community/async-storage'

class UpdateProfile extends React.Component {
    state = {
          "clientName":'', 
           "password":'', "mobile":'',
           "email":'',
           "region_Name":'',
          "streetName":'',
          "apartmentNumber":'',
          "buildingNumber":'', 
          "streetNumber":','
       
    }
validate_field=()=>{

    const{clientName,password,email,region_Name,streetName,apartmentNumber,buildingNumber,streetNumber}=this.state
    if(clientName==""||password==""||email==""||region_Name==""||streetName==""||apartmentNumber==""||buildingNumber==""||streetNumber=="")
    {
        alert("Fill All Field Please")
       return false
    }
  
     return true
}
    Edit = () => {
              //let ClientID=JSON.parse(await AsyncStorage.getItem("UserId"));

        console.log(this.state);
        if(this.validate_field()){
    alert("Updated Successfully")
     //   let id=this.props.route.params.ListScreen; from token
        // let schedualid=this.props.route.params.schedual;
         fetch(`http://10.0.2.2:8585/api/Client/Edit_Profile?ClientID=${1}&ClientName=${this.state.clientName}&password=${this.state.password}&mobile=${this.state.mobile}&Email=${this.state.email}&Region_Name=${this.state.region_Name}&StreetName=${this.state.streetName}&ApartmentNumber=${this.state.apartmentNumber}&BuildingNumber=${this.state.buildingNumber}&StreetNumber=${this.state.streetNumber}`
    
      
            )
        // axios.post("http://10.0.2.2:8585/api/Client/Edit_Profile", {
        //     "ClientID": 1,
        //     "ClientName":this.state.clientName,
        //     "password": this.state.password,
        //     "mobile": this.state.mobile,
        //     "Email": this.state.email,
        //     "Region_Name": this.state.region_Name,
        //     "StreetName": this.state.streetName,
        //     "ApartmentNumber": this.state.apartmentNumber,
        //     "BuildingNumber": this.state.buildingNumber,
        //     "streetNumber": this.state.streetNumber,
       
        // })
        .then((res) => res.json())
             .then((res) => {
                console.log(res);
               
            })
             .catch((error) => console.log("Error", error))
            //  this.props.route.params.ProfileScreen.setState( {Data:
            //     { "clientName":this.state.clientName,mobile:this.state.mobile,"email":this.state.email,
            //      "streetName":this.state.streetName,"name":this.state.region_Name,"buildingNumber":this.state.buildingNumber,
            //      "apartmentNumber":this.state.apartmentNumber,"streetNumber":this.state.streetNumber}});
            this.props.route.params.ProfileScreen.componentDidMount();
            this.props.navigation.navigate("Profile");
    }}
    render() {
        console.log(this.props);
        return (
            <>
                <View style={styles.container}>
        <View style={styles.inputContainer}>
                       
                               {/* <Label style = {styles.LabelText}>  وزن القمامه العضويه </Label> */}
                               {/* <Item stackedLabel> */}
                            <TextInput   style={styles.inputs} placeholder="Name" onChangeText={(clientName) => this.setState({ clientName })} />
                            </View>
                        {/* </Item> */}
                       
                               {/* <Label style = {styles.LabelText}> وزن القمامه الغير عضويه </Label> */}
                               {/* <Item stackedLabel> */}
                               <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="password" onChangeText={(password) => this.setState({ password })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="mobile" onChangeText={(mobile) => this.setState({ mobile })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="email" onChangeText={(email) => this.setState({ email })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="region_Name" onChangeText={(region_Name) => this.setState({ region_Name })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="streetName" onChangeText={(streetName) => this.setState({ streetName })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="streetNumber" onChangeText={(streetNumber) => this.setState({ streetNumber })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="apartmentNumber" onChangeText={(apartmentNumber) => this.setState({ apartmentNumber })} />
                        {/* </Item> */}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput  style={styles.inputs} placeholder="buildingNumber" onChangeText={(buildingNumber) => this.setState({ buildingNumber })} />
                        {/* </Item> */}
                        </View>
                        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.Edit}>
                      <Text style={styles.signUpText}>Update</Text>
   
                                 {/* <Icon name="ios-arrow-forward" />  */}
                                </TouchableHighlight>
                       
                            </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        width:410,
        height: 40,
    
        textAlign: "center"
        
    
        // backgroundColor: '#4f83cc',
        // borderRadius: 25,
        // marginVertical: 10,
        // paddingVertical: 12
    },
    buttonText: {
        fontSize: 22,
        // fontWeight: '500',
        // color: '#ffffff',
        textAlign: 'center'
    },
    LabelText: {
        fontSize: 18,
        color: '#C3C3BD'
        // fontWeight: '500',
        // color: '#ffffff',
       
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1eaa3',
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:30,
          borderBottomWidth: 1,
          width:200,
          height:35,
          marginBottom:15,
          flexDirection: 'row',
          alignItems:'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      signupButton: {
        backgroundColor: "#249C07",
      },
      signUpText: {
        color: 'white',
        fontSize: 20,
      }
    
});
export default UpdateProfile