import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#000'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#DF1C46'
    },
    box:{
        alignItems:'center',
        justifyContent:'center',
        width:'90%'
        },
    InputBox:{
        backgroundColor: '#2c2c2c',
        color:'#fff',
        borderColor:'#DF1C46',
        borderWidth: 1,
        marginTop: 20,
        width:'80%',
        height:30,
        borderRadius:10,
        padding: 10,
    },

    Button:{
        alignItems:'center',
        justifyContent:'center',
        width:'50%',
        height: 40,
        backgroundColor: '#DF1C46',
        marginTop: 20,
        borderRadius:10,
        padding: 10,
        borderColor:'#fff',
        borderWidth: 1
    }
})

export default styles
