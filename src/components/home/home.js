import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function Home(props) {

    const [nome, setNome ] = useState('Adriano')
    const primeiraMensagem = props.primeiraMensagem
    const segundaMensagem = props.segundaMensagem
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{primeiraMensagem}</Text>
            <TextInput style={styles.text} onChangeText={(text) => { setNome(text) }} value={nome} />
            <Text style={styles.text}>{nome}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#456187",
        flex: 1
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    textInput: {
        borderBottomWidth: 2,
        backgroundColor: '#fff'
    }
})