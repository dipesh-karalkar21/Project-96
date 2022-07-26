import React from "react";
import {RFValue} from "react-native-responsive-fontsize";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  Modal
} from "react-native";
import StudentList from "./StudentList";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";
import db from '../config';
export default class AddStudent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dropdownHeight: 40,
      name:"",
      std:"",
      board:"",
      fees:"",
      userId : firebase.auth().currentUser.email,
      isModalVisible:false,
      date:"",
      month:"",
      year:"",
      outSt:"",
    }
  }

  addStudent=()=> {
    if(this.state.year.length < 4){
      Alert.alert("Error,Please write year in following format : 2022")
      console.log("Error,Please write year in following format : 2022")
    }
    else if(this.state.date === "01"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "02"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "03"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "04"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "05"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "06"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "07"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "08"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.date === "09"){
      Alert.alert("Error,Please don't write date in this format : " + this.state.date)
      console.log("Error,Please don't write date in this format : " + this.state.date)
    }
    else if(this.state.month === "01"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "02"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "03"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "04"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "05"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "06"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "07"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "08"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else if(this.state.month === "09"){
      Alert.alert("Error,Please don't write month in this format : " + this.state.month)
      console.log("Error,Please don't write month in this format : " + this.state.month)
    }
    else{
      const date= new Date();
      const currMonth= date.getMonth() + 1;
      const outSt= this.state.fees;
      const currYear= date.getFullYear();
      const minus = currMonth - this.state.month;
      const plus = parseInt(minus) + 1 ;
      const minus2 = this.state.month - currMonth;
      const plus2 = 12 - parseInt(minus2) ;

        if(currYear === parseInt(this.state.year)){
          console.log("2")
        }
        else{
          console.log(currYear)
        }

        console.log(this.state.userId)
        console.log({
        name:this.state.name,
        std:this.state.std,
        board:this.state.board,
        fees:this.state.fees,
        date:this.state.date,
        month:this.state.month,
        year:this.state.year,
        outSt: currYear === parseInt(this.state.year) ? this.state.fees * plus : this.state.fees * plus2,
        minus:minus,
        plus:plus,
        paid: 0,
        })
      db.collection("users").doc(this.state.userId).collection("student").doc(this.state.name)
      .set({name:this.state.name,
        std:this.state.std,
        board:this.state.board,
        fees:this.state.fees,
        date:this.state.date,
        month:this.state.month,
        year:this.state.year,
        paid: 0,
        code: "Yes",
        statue: "Joined",
        })
      this.props.setUpdateToTrue()
      //toast.success("Student added successfully",{position:toast.POSITION.BOTTOM_CENTER})
      this.props.navigation.navigate("StudentList")
    }
  }

  showModal = ()=>{
    return(
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.isModalVisible}>
      <View style={styles.container2}>
      <TouchableOpacity
      style={{width:"100%",alignContent:"right",alignItems:"right",justifyContent:"right"}}
        onPress={()=>
            this.setState({
              isModalVisible:false,
            })
            }
        >
        <Ionicons name={"close-circle-outline"} size={RFValue(40)} color={"black"}/>
        </TouchableOpacity>
      <Image
          source={require('../assets/Logo.png')}
          style={styles.sideMenuProfileIcon}></Image> 
        <TouchableOpacity style={styles.btn2}
          onPress={()=>{
            this.props.navigation.navigate("Home"),this.setState({
              "isModalVisible":false
            })
            
           }}
        >
          <Text style={styles.btntext} >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}
          onPress={()=>{
            this.props.navigation.navigate("Fees"),this.setState({
              "isModalVisible":false
            })
           }}
        >
          <Text style={styles.btntext2}>View / Create Fees Template</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}
          onPress={()=>{
            this.props.navigation.navigate("Logout")
          }}
        >
          <Text style={styles.btntext2}>Logout</Text>
        </TouchableOpacity>
      </View>
      </Modal>
    )
  }

  render(){
    return(
      <View style={styles.container}>
      <ScrollView style={{width:"100%"}}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.title}>
      <Image style={{width:RFValue(75) , height:RFValue(75) , marginRight:RFValue(10)}} source={require("../assets/Logo.png")} />
        <Text style={styles.titletext}>Teacher's App</Text>
      </View>
      <View style={styles.main}>
      <View style={styles.image}>
        <Image source={require("../assets/Profile.png")} style={{width:RFValue(200) , height:RFValue(200)}}/>
      </View> 
        <View style={styles.textCon}>
        <Text style={styles.text}>Name : </Text>
        <TextInput placeholder={"Enter Student Name"} placeholderTextColor={"white"} style={styles.inputFont}
          onChangeText={(text)=>{
            this.setState({
              name:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text}>Std : </Text>
        <TextInput placeholder={"Enter Student's Std"} placeholderTextColor={"white"} style={styles.inputFont}  
          onChangeText={(text)=>{
            this.setState({
              std:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text}>Board : </Text>
        <TextInput placeholder={"Enter the Student's School Board"} placeholderTextColor={"white"} style={styles.inputFont} 
          onChangeText={(text)=>{
            this.setState({
              board:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text} keyboardType={"number-pad"}>Fees : </Text>
        <TextInput placeholder={"Enter the Student's Fees"} placeholderTextColor={"white"} style={styles.inputFont} keyboardType={"number-pad"}
          onChangeText={(text)=>{
            this.setState({
              fees:text,
            })
          }}
        />
        </View>
        <View style={styles.mtextCon}>
        <View>
        <Text style={styles.text}>Joining : </Text>
        <Text style={styles.text}>Date </Text>
        </View>
        <View style={{flexDirection:"column"}}>
        <TextInput placeholder={"Date"} placeholderTextColor={"white"} maxLength={2} style={styles.inputFont} keyboardType={"number-pad"}
          onChangeText={(text)=>{
            this.setState({
              date:text,
            })
          }}
        />
        <TextInput placeholder={"Month"} placeholderTextColor={"white"} maxLength={2} style={styles.inputFont}
          onChangeText={(text)=>{
            this.setState({
              month:text,
            })
          }}
        />
        <TextInput placeholder={"Year"} placeholderTextColor={"white"} maxLength={4} style={styles.inputFont}
          onChangeText={(text)=>{
            this.setState({
              year:text,
            })
          }}
        />
        </View>
        </View>
        <View style={styles.ntextCon}>
          <TouchableOpacity style={styles.btn} onPress={this.addStudent}>
            <Text style={styles.btntext}>Add Student</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#15193c",
    alignItems:"center",
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  title:{
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  image:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:RFValue(10)
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    width:RFValue(225)
  },
  textCon:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:RFValue(20)
  },
  ntextCon:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:RFValue(20),
    marginBottom:RFValue(60)
  },
  mtextCon:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:RFValue(20)
  },
  text:{
    color:"white",
    fontSize:RFValue(20),
    fontWeight:"bold"
  },
  titletext:{
    color:"white",
    fontSize:RFValue(25),
    fontWeight:"bold",
  },
  btn:{
    backgroundColor:"red",
    width:RFValue(150),
    height:RFValue(40),
    textAlign:"center",
    justifyContent:"center",
    borderRadius:RFValue(10)
  },
btntext:{
    fontSize:RFValue(15),
    fontWeight:"bold",
    color:"white",
    textAlign:"center"
  },
  btntext2:{
    fontSize:RFValue(15),
    fontWeight:"bold",
    color:"black",
    textAlign:"center",
  },
  btn2:{
    backgroundColor:"#15193c",
    width:"90%",
    height:RFValue(40),
    textAlign:"center",
    alignItems:"center",
    
    justifyContent:"center",
    borderRadius:RFValue(10),
    flexDirection:"row",
  },
  btn3:{
    backgroundColor:"white",
    width:"90%",
    height:RFValue(40),
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:RFValue(10),
    flexDirection:"row",
  },
  container2:{
    flex:1,
    borderRadius:RFValue(20),
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:"#ffff",
    marginRight:RFValue(30),
    marginLeft : RFValue(30),
    marginTop:RFValue(146),
    marginBottom:RFValue(120),
  },
  sideMenuProfileIcon: {
    width: RFValue(250),
    height: RFValue(250),
    borderRadius: RFValue(70),
    resizeMode: 'contain',
  },
})