import React from 'react'
import firebase from 'firebase';
import '@firebase/auth';
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from "@react-navigation/drawer"
import {DrawerActions} from "@react-navigation/native";




function SideBar({...props}){
    
 
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem
            label="Çıkış Yap"
            onPress={async()=>{ try {
                await firebase.auth().signOut();
                props.navigation.reset({
                  routes: [{ name: "Login" }]
                });
               
              } catch (error) {
                console.log(error, "çıkış hatası")
              }}}>

            </DrawerItem>
        </DrawerContentScrollView>
    )
}

export default SideBar;