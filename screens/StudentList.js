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
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "firebase";
import db from '../config';
export default class StudentList extends React.Component{
constructor(props){
  super(props)
  this.state={
    student:[],
    history:[],
    isModalVisible:false,
    modalVisible:false,
    modVisible:false,
    mVisible:false,
    userId:firebase.auth().currentUser.email,
    name:"",
    std:"",
    board:"",
    fees:"",
    date:"",
    month:"",
    year:"",
    outSt:"",
    paid:"",
    paidMonth:"",
    opaid:"",
    oyear:"",
  }
}

  componentDidMount(){
    this.getStudent();
    
  }

  getStudent = () => {
    db.collection("users").doc(this.state.userId).collection("student")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            student: [...this.state.student, doc.data()],
          });
        });
        
     this.props.setUpdateToFalse()
      });
  };

  renderHistory = ({item , i}) =>{
    return (
      <View style={styles.card}>
      <View style={styles.main}>
        <View style={styles.sub}>
        <Text style={styles.subText} >Std: {item.std}</Text>
        <Text style={styles.subText}>|</Text>
        <Text style={styles.subText} >Amount Paid: {item.paid}</Text>
        </View>
        <Text style={styles.subText} >For Month of {item.paidMonth}</Text>
        <Text style={styles.subText} >Paid On {item.date}/{item.month}/{item.year}</Text>
      </View>
      </View>
    );
  }

  editModal = () =>{
  return(
    <Modal
        animationType="none"
        transparent={true}
        visible={this.state.modVisible}>
      <View style={styles.container}>
      <ScrollView style={{width:"100%"}}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.title}>
      <Image style={{width:RFValue(75) , height:RFValue(75) , marginRight:RFValue(10)}} source={require("../assets/Logo.png")} />
        <Text style={styles.titletext}>Teacher's App</Text>
        <TouchableOpacity style={{marginRight:RFValue(10) , marginLeft:RFValue(10)}}
            onPress={()=>
                this.setState({
                  modVisible:false,
                })
                }
            >
            <Ionicons name={"close-circle-outline"} size={RFValue(40)} color={"white"}/>
            </TouchableOpacity>
      </View>
      <View style={styles.main}>
      <View style={styles.image}>
        <Image source={require("../assets/Profile.png")} style={{width:RFValue(200) , height:RFValue(200)}}/>
      </View> 
        <View style={styles.textCon}>
        <Text style={styles.text}>Name : {this.state.name}</Text>
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text}>Std : </Text>
        <TextInput placeholder={"Enter Student's Std"} defaultValue={this.state.std} placeholderTextColor={"white"} style={styles.inputFont}  
          onChangeText={(text)=>{
            this.setState({
              std:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text}>Board : </Text>
        <TextInput placeholder={"Enter the Student's School Board"} defaultValue={this.state.board} placeholderTextColor={"white"} style={styles.inputFont} 
          onChangeText={(text)=>{
            this.setState({
              board:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text} keyboardType={"number-pad"}>Fees : </Text>
        <TextInput placeholder={"Enter the Student's Fees"} defaultValue={this.state.fees} placeholderTextColor={"white"} style={styles.inputFont} keyboardType={"number-pad"}
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
        <TextInput placeholder={"Date"} defaultValue={this.state.date} placeholderTextColor={"white"} maxLength={2} style={styles.inputFont} keyboardType={"number-pad"}
          onChangeText={(text)=>{
            this.setState({
              date:text,
            })
          }}
        />
        <TextInput placeholder={"Month"} defaultValue={this.state.month} placeholderTextColor={"white"} maxLength={2} style={styles.inputFont}
          onChangeText={(text)=>{
            this.setState({
              month:text,
            })
          }}
        />
        <TextInput placeholder={"Year"} defaultValue={this.state.year} placeholderTextColor={"white"} maxLength={4} style={styles.inputFont}
          onChangeText={(text)=>{
            this.setState({
              year:text,
            })
          }}
        />
        </View>
        </View>
        <View style={styles.ntextCon}>
          <TouchableOpacity style={styles.btn} onPress={()=>{
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
              db.collection("users").doc(this.state.userId).collection("student").doc(this.state.name)
              .update({
                name:this.state.name,
                std:this.state.std,
                board:this.state.board,
                fees:this.state.fees,
                date:this.state.date,
                month:this.state.month,
                year:this.state.year,
                paid: parseInt(this.state.year) > parseInt(this.state.oyear) ? 0 : this.state.opaid
                })
              //toast.success("Student added successfully",{position:toast.POSITION.BOTTOM_CENTER})
              this.props.navigation.navigate("Loading")
          }}}>
            <Text style={styles.btntext}>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </View>
        </Modal>
        )
  }

  historyModal = () =>{
    return(
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.mVisible}>
          <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.title}>
          <Image style={{width:RFValue(75) , height:RFValue(75) , marginRight:RFValue(10)}} source={require("../assets/Logo.png")} />
            <Text style={styles.titletext}>Teacher's App</Text>
            <TouchableOpacity style={{marginRight:RFValue(10) , marginLeft:RFValue(10)}}
            onPress={()=>
                this.setState({
                  mVisible:false,
                })
                }
            >
            <Ionicons name={"close-circle-outline"} size={RFValue(40)} color={"white"}/>
            </TouchableOpacity>
          </View>
          <FlatList
                style={{height:200}}
                data={this.state.history}
                renderItem={this.renderHistory}
                keyExtractor={(item, index) => index.toString()}
                />
          </View>
        </Modal>
    )
  }

  payModal = () =>{
    return(
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.modalVisible}>
      <View style={styles.container}>
      <ScrollView style={{width:"100%"}}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.title}>
      <Image style={{width:RFValue(75) , height:RFValue(75) , marginRight:RFValue(10)}} source={require("../assets/Logo.png")} />
        <Text style={styles.titletext}>Teacher's App</Text>
        <TouchableOpacity style={{marginRight:RFValue(10) , marginLeft:RFValue(10)}}
            onPress={()=>
                this.setState({
                  modalVisible:false,
                })
                }
            >
            <Ionicons name={"close-circle-outline"} size={RFValue(40)} color={"white"}/>
            </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.textCon}>
        <Text style={styles.text}>Std : </Text>
        <TextInput value={this.state.std} placeholderTextColor={"white"} style={styles.inputFont}/>
        </View>
        <View style={styles.textCon}>
        <Text style={styles.text}>Month : </Text>
        <TextInput placeholder={"Enter the Month for which the fees is paid"} placeholderTextColor={"white"} style={styles.inputFont} 
          onChangeText={(text)=>{
            this.setState({
              paidMonth:text,
            })
          }}
        />
        </View>
        <View style={styles.textCon}>
        <View>
        <Text style={styles.text}>Paid </Text>  
        <Text style={styles.text}>Amount : </Text>
        </View>
        <TextInput placeholder={"Enter the Paid Amount"} placeholderTextColor={"white"} style={styles.inputFont} keyboardType={"number-pad"}
          onChangeText={(text)=>{
            this.setState({
              paid:text,
            })
          }}
        />
        </View>
        <View style={styles.mtextCon}>
        <View>
        <Text style={styles.text}>Date : </Text>
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
          <TouchableOpacity style={styles.btn} onPress={()=>{
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
          db.collection("users").doc(this.state.userId).collection("student").doc(this.state.name).collection("history").doc(`${this.state.std}(${this.state.paidMonth}${this.state.paid})`)
          .set({
            std:this.state.std,
            paid:this.state.paid,
            date:this.state.date,
            month:this.state.month,
            year:this.state.year,
            paidMonth:this.state.paidMonth,
            })
            db.collection("users").doc(this.state.userId).collection("student").doc(this.state.name)
            .update({
              paid:parseInt(this.state.opaid) + parseInt(this.state.paid)
            })
            this.setState({
              modalVisible:false,
            })
          //toast.success("Student added successfully",{position:toast.POSITION.BOTTOM_CENTER})
          this.props.navigation.navigate("Loading");
        }
          }}>
          <Text style={styles.btntext}>Done</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      </View>
      </Modal>
    )
  }

  renderItem = ({ item , i }) => {
    const date= new Date();
    const currDate = date.getDate() ;
    const currMonth= date.getMonth() + 1;
    const currYear= date.getFullYear();
    const estDate = 11 ;
    const minus = currMonth - item.month;
    const plus = parseInt(minus) + 1 ;
    const minus2 = item.month - currMonth;
    const plus2 = 12 - parseInt(minus2) ;
    const outSt = item.fees * plus;
    const outSt2 = item.fees * plus2
    console.log({
      outSt: outSt - item.paid,
      fees:item.fees,
      plus:plus,
      minus:minus
    })
 
    return (
      <View style={item.status === "Joined" ? styles.card : styles.leftCard}>
        {this.payModal()}
        {this.historyModal()}
        {this.editModal()}
      <View style={styles.main}>
        <Text style={styles.text} >{item.name}</Text>
        <View style={styles.sub}>
        <Text style={styles.subText} >Std: {item.std}({item.board})</Text>
        <Text style={styles.subText}>|</Text>
        <Text style={styles.subText} >Fees: {item.fees}</Text>
        </View>
        <Text style={styles.subText} >Outstanding Fees: {currYear === parseInt(item.year) ? outSt - item.paid : outSt2 - item.paid}</Text>
        <Text style={styles.subText} >Joined On: {item.date}/{item.month}/{item.year}</Text>
        <View style={styles.sub}>
        <TouchableOpacity style={styles.btn} onPress={()=>{
          db.collection("users").doc(this.state.userId).collection("student").doc(item.name).delete()
          .then(()=>{this.props.navigation.navigate("Loading")})
          }} >
          <Ionicons name={"trash"} size={RFValue(30)} color={"white"} /><Text style={styles.btntext}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{
        this.setState({
          name:item.name,
          std:item.std,
          opaid:item.paid,
          modalVisible:true,
        })
      }} >
          <Text style={styles.btntext}>Paid</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.sub}>
      <TouchableOpacity style={styles.btn} onPress={()=>{
        db.collection("users").doc(this.state.userId).collection("student").doc(item.name).collection("history")
        .get()
        .then(snapshot => {
          snapshot.docs.map(doc => {
            this.setState({
              history: [...this.state.history, doc.data()],
            });
          });
        });
        this.setState({
          mVisible:true,
        })
      }} >
          <Text style={styles.btntext}>Payment History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{
        this.setState({
          modVisible:true,
          fees:item.fees,
          board:item.board,
          std:item.std,
          name:item.name,
          year:item.year,
          date:item.date,
          month:item.month,
          oyear:item.year,
          opaid:item.paid,
        })
      }} >
          <Text style={styles.btntext}>Edit</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    );
  };

  showModal = ()=>{
    return(
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.isModalVisible}>
      <View style={styles.container2}>
      <TouchableOpacity
      style={{width:"100%"}}
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
      <ScrollView style={{width:"100%",height:"100%"}}>
      <View style={styles.container}>
        {this.showModal()}
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.title}>
      <Image style={{width:RFValue(75) , height:RFValue(75) , marginRight:RFValue(10)}} source={require("../assets/Logo.png")} />
        <Text style={styles.titletext}>Teacher's App</Text>
        <TouchableOpacity style={{marginRight:RFValue(10) , marginLeft:RFValue(10)}}
        onPress={()=>
            this.setState({
              isModalVisible:true,
            })
            }
        >
        <Ionicons name={"menu"} size={RFValue(40)} color={"white"}/>
        </TouchableOpacity>
      </View>
      <FlatList
            style={{height:"100%"}}
            data={this.state.student}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#15193c",
    alignItems:"center",
  },
  container3:{
    flex:1,
    backgroundColor:"white",
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
  titletext:{
    color:"white",
    fontSize:RFValue(25),
    fontWeight:"bold",
  },
  text:{
    color:"white",
    fontSize:RFValue(25),
    fontWeight:"bold",
  },
  subText:{
    color:"white",
    fontSize:RFValue(20),
    fontWeight:"bold",
    marginLeft:RFValue(10),
    marginRight:RFValue(10),
  },
  card:{
    borderWidth:RFValue(1),
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    width:RFValue(350),
  },
  leftCard:{
    display:"none"
  },
  sub:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  main:{
    margin:RFValue(10),
    textAlign:"center",
    alignItems:"center",
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
    btn:{
    backgroundColor:"red",
    width:RFValue(100),
    height:RFValue(40),
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:RFValue(10),
    flexDirection:"row",
    marginTop:RFValue(10),
    marginRight:RFValue(10),
    marginLeft:RFValue(10)
  },
btntext:{
    fontSize:RFValue(15),
    fontWeight:"bold",
    color:"white",
    textAlign:"center",
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