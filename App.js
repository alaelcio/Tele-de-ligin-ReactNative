import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Pratform, Platform} from 'react-native';
import { FontAwesome} from '@expo/vector-icons';
import {KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native'

export default function App() {
  return (

    <KeyboardAvoidingView
     behavior= {Platform.OS === 'ios' ? 'padding': 'height'}
    
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      

      
    <View style={styles.container}>

      <StatusBar backgroundColor="#fff" translucent={false} />
      
          <Image
           source={require('./src/assets/instagram-logo.png')}
            style={styles.logo}
          />

          <TextInput
          placeholder="Celular usename ou seu e-mail"

          style={styles.input}
          />

              <TextInput
                 placeholder="Sua senha"
                 style={styles.input}
              />
              
              <View style={styles.forgotContainer}>
              <TouchableOpacity>

                <Text style={styles.forgotText}>Esqueceu sua Senha</Text>
              </TouchableOpacity>

              </View>

              <TouchableOpacity style={styles.loginButton}>

                <Text>Acessar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.facebookcontainer}>
                <FontAwesome name="facebook" size={25} color="#3999ff"/>

                <Text style={styles.fabookText}>Continue como Alaelcio</Text>

              </TouchableOpacity>

              <View style={styles.divisor}>
              
                <View style={styles.divisorline}></View>

                      <Text style={{marginHorizontal:'5%'}}>ou</Text>
                
                <View style={styles.divisorline}></View>
                </View>
                <View style={styles.signUpContainer}>
                  <Text style={styles.signUPText}>Não possui sua uma conta?</Text>
                  <TouchableOpacity>
                    <Text style={styles.signUpButton}>Cadastre-se</Text>
                  </TouchableOpacity>

                </View>

              </View>
              </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    
  },

  logo:{

     margin: '20%',
     marginBottom: '19%',
  },

   input:{
      backgroundColor:'#fff',
      color: '#e0f',
      width:'90%',
      height: 42,
      marginBottom:20,
      padding: 8,
      borderRadius: 5,
      borderWidth:1,
      borderColor: '#3999ff',
     
     
   },

  forgotContainer:{

    width: '90%',
    alignItems:'flex-end'
  },
  forgotText:{
    color: '#3999ff',
  },

  loginButton:{
    margin: '5%',
    backgroundColor:'#3999ff',
    width: '90%',
    height: 48,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  loginText:{

    color: '#3999ff',
  },

  fabookText:{

    color: '#3999ff',
    padding: 8,
  },

  facebookcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:16,
    fontSize:18,
  },

  divisor:{
    marginTop:'10%',
    flexDirection:'row',
    width: '90%',
    alignItems:'center',
    justifyContent:'center',
  },

  divisorline:{
    width: '45%',
    height: 2,
    backgroundColor:'#efeded',
  },

  signUpContainer:{
    flexDirection:'row',
    marginTop:'10%'
  },
  signUpButton:{
    color: '#3999ff',
    paddingRight: 10,
  },

  signUPText:{

    color: '#c4c4c4',
    fontWeight: 'bold',
  },

  


});
