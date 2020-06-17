import React from 'react';
import {StyleSheet} from 'react-native';
import {Text,Container, Header, Content, Form, Item, Picker,Textarea,Icon,Button,Body, Label} from 'native-base';

export default class Feedback extends React.Component{
  state={
    feedbackCategories:[],
    selectedCat:"",
  }
  
   feedback={Id:0,CategoryId:null,FeedbackContent:null,ClientId:2020,Date:null};

  componentDidMount () {
    fetch("http://10.0.2.2:8585/api/feedbackcategory/getall")   .then((res)=>res.json())
    .then((res)=>{      console.log(res);
      this.setState({feedbackCategories:res});
      console.log(this.state.feedbackCategories);
    })
      .catch((error)=>console.log("Error",error));
  } 
  
  validate_field=()=>{

    const{Id,CategoryId,FeedbackContent,ClientId,Date}=this.feedback
    if(FeedbackContent==null)
    {
        alert("you must write something.")
       return false
    }
    else if(CategoryId==null)
    {
        alert("you must choose category.")
       return false
    }
  
     return true
}

Add = () => {
  console.log(this.feedback);
  if(this.validate_field()){
  alert("Thanks for your feedback :)");
  console.log(this.feedback);
  
  fetch("http://10.0.2.2:8585/api/Feedback/addFeedback",{
    method: 'POST',
    body: JSON.stringify(this.feedback)
 })
  .then((res) => res.json())
       .then((res) => {
          console.log("success",res);
         
      })
       .catch((error) => console.log("Error", error))
      
}}

onCatgChange(value,index) {
  this.setState({
  
    selectedCat: value,
   
  });
  this.feedback.CategoryId=index+1;
 // console.log(this.feedback);
}
    render(){
        return(
            <Container>
            <Header style={styles.header} />
            <Content>
              <Form>
              <Label style={{color:'green'}}>Choose Category: </Label>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Choose category"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedCat}
                   // onValueChange={this.onValueChange2.bind(this)}
                   onValueChange={(value, index) => this.onCatgChange(value, index)}
                  >
                      {this.state.feedbackCategories.map((item)=>{
                         return(
                          <Picker.Item label={item.category} value={item.id} />
                          )}
                        )}
                         
                  </Picker>
                </Item>
                <Text style={{color:'green'}}>Your Feedback: </Text>
                <Textarea style={{fontWeight:'bold', fontSize:19, }} rowSpan={5} bordered placeholder="Textarea" onChangeText={(FeedbackContent) => this.feedback.FeedbackContent=FeedbackContent } />
              
                <Button rounded success onPress={this.Add} style={{justifyContent:'center', marginTop:10,width:70}}>
                  
                  <Text>Send</Text>
                 
                </Button>
              </Form>
            </Content>
          </Container>
        );
    }
} 
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#5ECA4E",
        // height:200,
      }});