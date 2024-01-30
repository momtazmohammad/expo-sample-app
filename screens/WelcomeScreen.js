import React, { useState } from "react";
import {  
  Linking,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import Button from "../components/Button";
import Snackbar from "../components/Snackbar";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";

function WelcomeScreen() {  
  const [snackbar, setSnackbar] = useState({
    msg: "",
    open: false,
    backColor: defaultStyles.colors.success,
  });
  return (
    <Screen    
    style={styles.container}
  >
       <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/company.jpg")} />
        <Text style={styles.text}>صفحه خوش آمد گويي</Text>
        <Text style={styles.text}>@company</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://google.com")}
        >
          <Text style={styles.text}>https://google.com</Text>
        </TouchableOpacity>
      </View>
      
      
        <Button
          title="ورود"          
          onPress={() => setSnackbar({msg:"login success full",open:true,backColor:"#66bb66"})}
        />
        <Button
          title="عضویت"
          color="medium"
          onPress={() => console.log("registration")}
        />
        
          <Button
            title="ورود مهمان"            
            onPress={()=>console.log("ورود مهمان")}
          />        
        
        
        <Snackbar
          time={5000}
          open={snackbar.open}
          msg={snackbar.msg}
          backColor={snackbar.backColor}
          onPress={() => setSnackbar({ ...snackbar, open: false })}
        />
      </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
    width: "90%",     
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 50,
    alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  text: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
