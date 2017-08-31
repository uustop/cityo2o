import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
const styles = {
    wrapper: {
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
}

export default class Homepage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            imgList: [
                'https://img1.360buyimg.com/da/jfs/t8377/156/202307/110069/1e8d4ee4/599e8949Na8c4b4ca.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t8422/318/375531685/83272/ff93867f/59a6ec9aN11a4988e.jpg!q70.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t7801/235/1918577840/66825/a8ce655a/59a3bad2Nab4833e2.jpg!q70.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t9424/48/50001665/86067/98db6c33/599f9b5fNc846be47.jpg!q70.jpg'
            ],
            adList:[
                'https://m.360buyimg.com/mobilecms/jfs/t9154/69/384413561/61373/8889e7f6/59a6dab1Nccab65c8.jpg!q70.jpg'
            ]
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:168}}>
                    <Swiper>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={{url:this.state.imgList[0]}} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={{url:this.state.imgList[1]}} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={{url:this.state.imgList[2]}} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={{url:this.state.imgList[3]}} />
                        </View>
                    </Swiper>
                </View >
                <View style={{height:96}}>
                    <Image style={styles.image} source={{url:this.state.adList[0]}} />
                </View>
            </View>
        );
    }
}

