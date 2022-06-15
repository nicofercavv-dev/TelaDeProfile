import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGitHub = '#0a0c10';
const colorFontGitHub = '#c9d1d9';
const colorDarkFontGitHub = '#4f565e';
const imageProfile = 'https://avatars.githubusercontent.com/u/70589176?v=4';
const urlToMyGitHub = 'https://github.com/nicofercavv-dev';

const App = () =>{
    
    const handlePressGoToGitHub = async () =>{
        console.log("Verificando link")
        const response = await Linking.canOpenURL(urlToMyGitHub);
        if(response) {
            console.log("Link aprovado")
            await Linking.openURL(urlToMyGitHub);
            console.log("Abrindo link...")
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
            <View style={style.content}>
                <Image accessibilityLabel='Nicole tomando um açaí' style={style.avatar} source={{uri: imageProfile}}/>
            <Text accessibilityLabel='Nome Nicole Ferreira' 
                style={[style.defaultText, style.name]}>Nicole Ferreira</Text>
            <Text accessibilityLabel='Nickname Nicole ferreira' 
                style={[style.defaultText, style.nickname]}>nicofercavv-dev</Text>
            <Text accessibilityLabel='Software engineering student | Software developer | HTML | CSS | JavaScript | ReactJS/React Native' 
                style={[style.defaultText, style.description]}>
                Software engineering student | Software developer | HTML | CSS | JavaScript | ReactJS/React Native
            </Text>
            <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                </View>
            </Pressable>
                </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { 
        //column
        backgroundColor: colorGitHub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 25,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
    },
    defaultText: {
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 2,
    },
    nickname: {
        fontSize: 18,
        marginBottom: 15,
        color: colorDarkFontGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colorFontGitHub,
    },
    button: {
        marginTop: 30,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorFontGitHub,
    },
});