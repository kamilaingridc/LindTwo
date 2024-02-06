import { View, Text, TextInput } from "react-native";
import styles from "./style";

export default function Login(){  // define função
    return(  // inicia o retorno da função // view parecido com div
        <View style={styles.container}>  
            <View style={styles.box}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View></View>
            <View></View>
        </View>
    )
}
