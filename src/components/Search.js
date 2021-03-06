import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import constants from '../Constants'
import { Searchbar } from 'react-native-paper';

const WIDTH = Math.round(Dimensions.get('window').width); a = 2;
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            cartData: [], firstQuery: ""
        }
    }
    renderHeader = () => {
        return (
            <View style={styles.headerStyle}>
                <View style={{ flex: .1 }}>

                </View>
                <View style={{ flex: .8 }}>
                    <Text style={styles.textStyleHeader}>Search</Text>
                </View>
                <View style={{ flex: .1 }}>

                </View>
            </View>
        );
    }
    renderSearch() {
        const { firstQuery } = this.state;
        return (
            <View style={{ padding: 10 }}>
                <Searchbar
                    placeholder="Search your friends"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                    style={{ borderRadius: 5, height: 40 }}
                />

            </View>
        )
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                {this.renderHeader()}
                {this.renderSearch()}
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
export default Search