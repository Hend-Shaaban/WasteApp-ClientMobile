import React from 'react'
import { Content, Container, Text, Header, Left, Right, Spinner,Card, CardItem } from 'native-base'
import { TouchableHighlight ,StyleSheet, Linking, Platform} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
export default class ClientPromotion extends React.Component{
    state = {
        Data: null,
      
    }
    componentDidMount() {
        this.getDataFromJson();
        
    }
    
    async getDataFromJson() {
           //  let CollectorID=JSON.parse(await AsyncStorage.getItem("UserId"));
            // console.log("ID: ", CollectorID);
       fetch(`http://10.0.2.2:8585/api/client/getPromotions`
  
        ).then((res) => res.json())
         .then((res) => {
            console.log(res);
            this.setState({
                Data: res
            })
        })
         .catch((error) => console.log("Error", error))
    }

     SelectPromotion=(Id) =>{
           //  let CollectorID=JSON.parse(await AsyncStorage.getItem("UserId"));
            // console.log("ID: ", CollectorID);
            fetch(`http://10.0.2.2:8585/api/client/AddClientPromotion`,{

                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "ClientId":1,
                    "PromtionId":Id
                })
              })
               
          
                .then((res) => res.json())
                 .then((res) => {
                    console.log(res);
                    //  alert("Selecct Successfully")
                })
                 .catch((error) => console.log("Error", error))

                 fetch(`http://10.0.2.2:8585/api/client/getClientPoints/${1}`)
                    .then((res) => res.json())
                     .then((res) => {
                        console.log(res);
                        if(res!="false")
                         alert(`Selecct Successfully And your Points is ${res} `)
                    })
                     .catch((error) => console.log("Error", error))     
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
            return (

                <ScrollView style={{backgroundColor: 'white'}}>

                
                {/* <Card> */}
                    {
                        this.state.Data.map((item) => {
                            
                            
                            
                          
                            return(
                                <Card style={styles.card}>
                                    <CardItem style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#d1eaa3'}} key={1}>
                                    <Left>
                                    <Text style={{fontWeight:'bold', fontSize:22, }}>{item.name}</Text>
                                    </Left>
                                    <Right>
                                        <TouchableHighlight underlayColor={'transparent'}onPress={()=> this.SelectPromotion(item.id)} >
                                        { <Icon name="md-hand" size={30} color='#2E8B57'/> }
                                        </TouchableHighlight>
                                    </Right>
                                    
                                   
                                    </CardItem>
                                    <CardItem style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#d1eaa3'}} key={2}>
                                                              
                                       <Left>
                                    <Text style={{fontSize:16}}>{item.requiredPoints}{" Required "}{" Points "}</Text>
                                        <Text style={{textDecorationLine:'underline'}}>{"  "}{item.details} - {item.company.name}</Text>
                                       </Left>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                {/* </Card> */}
                </ScrollView>
    
            )
        }
    }
}

const styles = StyleSheet.create({
    button1: {
        width:100,
        height: 35,
        // backgroundColor: '#4f83cc',
        borderRadius: 35,
        // marginVertical: 10,
        // paddingVertical: 5
        justifyContent:'center',
        backgroundColor:'lightgreen'
    },
    button2: {
        width:100,
        height: 35,
        // backgroundColor: '#4f83cc',
        borderRadius: 30,
        // marginVertical: 10,
        // paddingVertical: 5
        justifyContent:'center',
        backgroundColor:'lightcyan'
    },
    buttonText: {
        fontSize: 20,
        fontWeight:'bold',
        color: '#000000',
        textAlign: 'center'
    },
    card:{
        borderRadius:20,
        marginLeft:10,
        marginRight:10,
        // backgroundColor: '#d1eaa3'
    }
});