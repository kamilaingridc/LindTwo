import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import React, {useState} from "react";

export default function Login(){  // define função

    const [user, setUser] = useState('')  // setar usuário
    const [password, setPassword] = useState('')  // setar senha


    return(  // inicia o retorno da função // view parecido com div
        <View style={styles.container}>  
            <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.box}>
                <TextInput 
                    style={styles.InputBox}
                    placeholder="User"
                    onChangeText={setUser}
                    value={user}
                >

                </TextInput>
            </View>
            <View style={styles.box}>
                <TextInput 
                    style={styles.InputBox}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                >

                </TextInput>
            </View>


            <View style={styles.box}>
                <TouchableOpacity 
                    style={styles.Button} 
                    onPress={() => {
                        console.log('User:', user)
                        console.log('Password:', password)
                    }}
                    >
                    <Text style={{color:'#fff', fontSize:20}}> Enter</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
