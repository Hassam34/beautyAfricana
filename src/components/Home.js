import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Card, CardSection, } from './useableComponents/common';
import constants from '../Constants'


const options = {
    title: 'Select Options to Upload Your Post',
    takePhotoButtonTitle: 'Open Camera',
    chooseFromLibraryButtonTitle: 'Choose from Gallery',

};

const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarSource: []
        }
    }
    renderHeader = () => {
        return (
            <View style={styles.headerStyle}>
                <View style={{ flex: .1 }}>
                    <TouchableOpacity style={{
                        alignContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={this.chooseImagePickerOptions.bind(this)} >
                        <Icon name='camera' size={22} style={{ marginTop: 2 }} color={constants.whiteColor} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .8 }}>
                    <Text style={styles.textStyleHeader}>Feeds</Text>

                </View>
                <View style={{ flex: .1 }}>
                    {/* <TouchableOpacity style={{ marginLeft: 5 }} onPress={this.chooseImagePickerOptions.bind(this)} >
                        <Icon name='camera' size={22} style={{ marginTop: 2 }} />
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
    chooseImagePickerOptions = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response, 'state', this.state.avatarSource);
            if (response.didCancel) {
                console.log('User cancelled image picker', ' avatar ', this.state.avatarSource);
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };

                //this.state.avatarSource.push(source);
                this.setState({ avatarSource: [...this.state.avatarSource, source] })
                // this.setState({
                //     avatarSource : source,
                //     isPhotoSelected: true,
                // });
            }
        });
    }
    renderRow = (image) => {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailMarginStyle}>
                        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg'}} style={styles.thumbnailStyle} />
                    </View>
                    <View style={styles.dataStyle}>
                        <Text style={styles.textStyle}>Donald Trump</Text>
                        <Text style={{
                            fontSize: 10, color: constants.whiteColor
                        }}>United States</Text>
                    </View>
                </CardSection>
                <CardSection >
                    <Image source={image.item} style={styles.imageStyle} />
                </CardSection>

            </Card>
        )
    }
    
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={{ flex: 1 }}>
                    <View>
                        {this.renderHeader()}
                    </View>
                    <FlatList
                        data={this.state.avatarSource}
                        renderItem={this.renderRow}
                        ListEmptyComponent={
                            <Text style={{ color: 'grey', textAlign: 'center', color: constants.whiteColor }}>Click Camera Icon to Add Posts</Text>

                        }

                    />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer:
    {
        backgroundColor: "#2E4053",
        flex: 1,
    },
    headerStyle: {
        backgroundColor: constants.darkMainColor,
        // justifyContent: 'center',
        //alignItems:'center',
        height: 50,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.9,
        elevation: 2,
        position: 'relative',
        flexDirection: 'row'
        // borderBottomWidth:3,
        // borderColor:'11111',
        // borderWidth:2,

    },
    textStyleHeader: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
        color: constants.whiteColor,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: '100%',
        // justifyContent:'center',
        alignItems: 'center'
    },
    logoStyle: {
        marginTop: 80,
        marginBottom: 10,
        color: 'white',
        // width: 175,
        height: 170,
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
        borderColor: '#E51C24',
        shadowOpacity: 2,
        borderRadius: 12,
        borderWidth: 1,
        marginHorizontal: 25,
        color: 'white'
    },
    loginButtonStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle0: {
        //alignSelf: 'center',
        // marginLeft: 25,
        color: 'white',
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
        backgroundColor: '#E51C24',
        // backgroundColor:'white',
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
        borderColor: 'white',
        // backgroundColor: '#FF9800', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        // position: 'absolute',
        bottom: 0,

    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    dataStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: constants.whiteColor
    },
    thumbnailMarginStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 2,
        borderRadius: 5
    }
})
export default Home