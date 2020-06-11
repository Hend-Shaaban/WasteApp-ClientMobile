import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import  DrawerContent  from '../Router/drawerContent'
import home from '../Router/home'

export default class currentRequest extends React.Component{
     Drawer = createDrawerNavigator();
    render(){
        return(
           <NavigationContainer>
               <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }>
                  <Drawer.Screen name="Home" component={home}/>
               </Drawer.Navigator>         
           </NavigationContainer>
        );
    }
} 