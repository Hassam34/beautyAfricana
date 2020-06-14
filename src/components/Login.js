import React from 'react'
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Picker,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import constants from '../Constants'
import { Button, CardSection, Spinner } from './useableComponents/common';
// import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateLanguage: '',
            userInfo: '',
            loggedIn: true,
            email: '',
            password: '',
            spinnerShow: false,
            isSignup: false,
            forgetPassword: false
        }
    }
    componentDidMount() {
        // await AsyncStorage.removeItem('AccessToken');
        this.gettingAsyncData();
    }
    gettingAsyncData = async () => {
        console.log("hello hassam ")
        let userIdSimple = await AsyncStorage.getItem('AccessTokenSimpleLogin');
        console.log("hahaha : 1")
        if (userIdSimple) {
            console.log("hahaha : 2")
            this.setState({ loggedIn: false }, () => {
                const pushAction = StackActions.replace('Drawer', { screenProps: this.props.navigation });
                this.props.navigation.dispatch(pushAction);
            })

        }
        else {
            console.log("hahaha : 3")
            this.setState({ loggedIn: false }, () => console.log('I am blalalal'))
        }
    }
    handleLogin = () => {
        const pushAction = StackActions.replace('Drawer', { screenProps: this.props.navigation });
        this.props.navigation.dispatch(pushAction);
        // this.setState({ spinnerShow: true })
        // if (this.state.email == '' || this.state.password == '') {
        //     this.setState({ spinnerShow: false }, () => alert("Enter valid Data"))

        //     alert("Enter valid Data")
        // }
        // else {
        //     auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        //         .then((response) => {
        //             this.setState({ spinnerShow: false })
        //             console.log('The response is ', response)
        //             AsyncStorage.setItem('AccessTokenSimpleLogin', response.user.uid);
        //             const pushAction = StackActions.replace('Drawer',{screenProps:this.props.navigation});
        //             this.props.navigation.dispatch(pushAction);
        //         })
        //         .catch((error) => {
        //             this.setState({ spinnerShow: false }, () => alert("Your error is :\n" + error))
        //             console.log('The error response is ', error)
        //         }
        //         )

        // }

    }
    handleSignup = () => {
        const pushAction = StackActions.replace('Drawer', { screenProps: this.props.navigation });
        this.props.navigation.dispatch(pushAction);
        // this.setState({ spinnerShow: true })
        // if (this.state.email == '' || this.state.password == '') {
        //     this.setState({ spinnerShow: false }, () => alert("Enter valid Data"))

        //     alert("Enter valid Data")
        // }
        // else {
        //     auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        //         .then((response) => {
        //             this.setState({ spinnerShow: false }, () => alert('New Account is Created'))
        //             console.log('The create user response is ', response)
        //             AsyncStorage.setItem('AccessTokenSimpleLogin', response.user.uid);

        //         })
        //         .catch((error) => {
        //             this.setState({ spinnerShow: false }, () =>
        //                 alert("Your error is :\n" + error)
        //             )
        //         })
        // }
    }
    resetPassword = () => {
        const pushAction = StackActions.replace('Drawer', { screenProps: this.props.navigation });
        this.props.navigation.dispatch(pushAction);
        // this.setState({ spinnerShow: true })
        // if (this.state.email == '') {
        //     this.setState({ spinnerShow: false }, () => alert("Enter valid Data"))
        //     alert("Enter valid Data")
        // }
        // else {
        //     auth().sendPasswordResetEmail(this.state.email).then((response) => {
        //         this.setState({ spinnerShow: false }, () => alert('Email has been send '))
        //         console.log('The email reset response is ', response)
        //     })
        //         .catch((error) => {
        //             this.setState({ spinnerShow: false }, () =>
        //                 alert("Your error is :\n" + error)
        //             )
        //         })
        // }

    }
    showSpinner(size) {
        return (<View style={{}}>
            <ActivityIndicator size={size} color={constants.whiteColor} />
        </View>)

    }
    render() {
        console.disableYellowBox = true
        // console.log('The states are',this.state)
        return (
            <View style={styles.MainContainer}>
                {this.state.loggedIn
                    ?
                    <View style={{
                        flex: 1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {this.showSpinner("large")}
                    </View>

                    :
                    <View style={styles.backgroundImageStyle}>
                        <View style={{flex:.3,justifyContent:'center'}} >
                            {/* <Text style={styles.logoStyle}>
                                BEAUTY AFRICANA
                                </Text> */}
                            <Image
                                style={styles.stretch}
                                source={require('../appIcon.jpeg')}
                            />
                        </View>
                        <View style={{flex:.7, alignItems: 'center',}}>
                            <View style={{ marginTop: 0 }}>
                                <View>
                                    <TextInput
                                        placeholder='Phone number, email address or username'
                                        placeholderTextColor={constants.whiteColor}
                                        underlineColorAndroid='transparent'
                                        onChangeText={email => this.setState({ email })}
                                        value={this.state.email}
                                        style={{
                                            marginTop: 10,
                                            paddingLeft: 10,
                                            width: WIDTH - 55,
                                            height: 50,
                                            fontSize: 15,
                                            backgroundColor: 'rgba(0,0,0,0.02)',
                                            borderColor: this.state.isSignup ? constants.greenColor : constants.redColor,
                                            shadowOpacity: 2,
                                            borderRadius: 12,
                                            borderWidth: 1,
                                            marginHorizontal: 25,
                                            color: constants.whiteColor
                                        }} />
                                </View>
                                {!this.state.forgetPassword &&
                                    <View>
                                        <TextInput
                                            secureTextEntry
                                            placeholder='Password'
                                            placeholderTextColor={constants.whiteColor}
                                            underlineColorAndroid='transparent'
                                            onChangeText={password => this.setState({ password })}
                                            value={this.state.password}
                                            style={{
                                                marginTop: 10,
                                                paddingLeft: 10,
                                                width: WIDTH - 55,
                                                height: 50,
                                                fontSize: 15,
                                                backgroundColor: 'rgba(0,0,0,0.02)',
                                                borderColor: this.state.isSignup ? constants.greenColor : constants.redColor,
                                                shadowOpacity: 2,
                                                borderRadius: 12,
                                                borderWidth: 1,
                                                marginHorizontal: 25,
                                                color: constants.whiteColor
                                            }} />
                                    </View>
                                }
                            </View>

                            <View style={{ marginTop: 7 }}>
                                <TouchableOpacity onPress={() => this.setState({ forgetPassword: !this.state.forgetPassword, isSignup: false })}
                                    style={{ flexDirection: 'row' }}
                                >

                                    <Text style={{ color: constants.whiteColor, fontSize: 12 }}>{this.state.forgetPassword ? "" : "Forgot your Login details?"}</Text>
                                    <Text style={{ color: constants.whiteColor, fontSize: 12, fontWeight: 'bold' }}> {this.state.forgetPassword ? "Go to Login Screen" : "Get help signing in"}</Text>

                                </TouchableOpacity>
                            </View>
                            {this.state.isSignup
                                ?
                                <CardSection>
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                if (this.state.forgetPassword) {
                                                    this.resetPassword()
                                                }
                                                else {
                                                    this.handleSignup()

                                                }
                                            }
                                        }
                                        style={styles.buttonStyleGreen} >
                                        <View style={{ alignSelf: 'center' }}><View >
                                            {this.state.spinnerShow ?
                                                this.showSpinner("large")
                                                :
                                                <Text style={styles.textStyle}>{this.state.forgetPassword ? "Reset password" : "Sign Up"}</Text>
                                            }
                                        </View>
                                        </View>
                                    </TouchableOpacity>

                                </CardSection>
                                :

                                <CardSection>
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                if (this.state.forgetPassword) {
                                                    this.resetPassword()
                                                }
                                                else {
                                                    this.handleLogin()

                                                }
                                            }
                                        }
                                        style={styles.buttonStyle} >
                                        <View style={{ alignSelf: 'center' }}><View >
                                            {this.state.spinnerShow ?
                                                this.showSpinner("large")
                                                :
                                                <Text style={styles.textStyle}>{this.state.forgetPassword ? "Reset password" : "Login"}</Text>
                                            }
                                        </View>
                                        </View>
                                    </TouchableOpacity>

                                </CardSection>
                            }
                            {/* <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                        disabled={this.state.isSigninInProgress} /> */}
                            <View>
                                <Text style={{ color: constants.whiteColor, marginTop: 10 }}>
                                    -------------------OR -------------------
                    </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row' }}
                                    //  onPress={() => this.props.navigation.navigate('Welcome')}
                                    onPress={() => this.setState({ isSignup: !this.state.isSignup, forgetPassword: false })}
                                >
                                    <Text style={{ color: constants.whiteColor, marginTop: 10, fontSize: 12 }}>
                                        {this.state.isSignup ? "Already have an account" : "Don't have an account?"}
                                    </Text>
                                    <Text style={{ color: constants.whiteColor, marginTop: 10, fontSize: 12, fontWeight: 'bold' }}>
                                        {this.state.isSignup ? " Login" : " Sign up"}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.bottomView}>
                                <Text style={{ color: constants.whiteColor, fontSize: 12 }}>
                                    BEAUTY AFRICANA "socialy connect us"
                    </Text>
                            </View>
                        </View>
                    </View>
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    MainContainer:
    {
        backgroundColor: constants.mainColor,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },
    stretch: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10, marginTop: 10, marginBottom: 10
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: '100%',
        // justifyContent:'center',
        alignItems: 'center',

    },
    logoStyle: {
        marginTop: 80,
        // backgroundColor:'red',
        // marginBottom: 10,
        color: constants.whiteColor,
        // width: 175,
        // height: 50,
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        marginTop: 10,
        paddingLeft: 10,
        width: WIDTH - 55,
        height: 50,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderColor: constants.redColor,
        shadowOpacity: 2,
        borderRadius: 12,
        borderWidth: 1,
        marginHorizontal: 25,
        color: constants.whiteColor
    },
    loginButtonStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle: {
        //alignSelf: 'center',
        // marginLeft: 25,
        color: constants.whiteColor,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonStyle: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        // borderColor:'#007aff',
        backgroundColor: constants.redColor,
        // backgroundColor:constants.whiteColor,
        // borderWidth:1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
    },
    buttonStyleGreen: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        // borderColor:'#007aff',
        backgroundColor: constants.greenColor,
        // backgroundColor:constants.whiteColor,
        // borderWidth:1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
    },
    bottomView: {
        width: '100%',
        marginTop: 80,
        height: 30,
        borderTopWidth: 0.3,
        borderColor: constants.whiteColor,
        // backgroundColor: '#FF9800', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        // position: 'absolute',
        bottom: 0,

    },
})
export default Login