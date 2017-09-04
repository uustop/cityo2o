import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
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

const haha = ()=>{
    <TouchableOpacity
        onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
        <View style={{height:96}}>
            <Image style={styles.image} source={{url:this.state.adList[0]}} />
        </View>
    </TouchableOpacity>
}

export default class Group extends Component {
    constructor (props) {
        super(props)
        navigation=this.props.navigation;
        this.state = {
            imgList: [
                'https://img1.360buyimg.com/da/jfs/t8377/156/202307/110069/1e8d4ee4/599e8949Na8c4b4ca.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t8422/318/375531685/83272/ff93867f/59a6ec9aN11a4988e.jpg!q70.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t7801/235/1918577840/66825/a8ce655a/59a3bad2Nab4833e2.jpg!q70.jpg',
                'https://m.360buyimg.com/mobilecms/s720x322_jfs/t9424/48/50001665/86067/98db6c33/599f9b5fNc846be47.jpg!q70.jpg'
            ],
            adList:[
                'https://m.360buyimg.com/mobilecms/jfs/t9154/69/384413561/61373/8889e7f6/59a6dab1Nccab65c8.jpg!q70.jpg',
                'https://m.360buyimg.com/mobilecms/jfs/t9154/69/384413561/61373/8889e7f6/59a6dab1Nccab65c8.jpg!q70.jpg'
            ]
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{height:168}}>
                        <Swiper paginationStyle={{bottom: 10}}>
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => navigation.navigate('Web', { url: 'https://www.jd.com' ,name:'京东'})}>
                                <View style={{height:168}}>
                                    <Image style={styles.image} source={{uri:this.state.imgList[0]}} />
                                </View></TouchableOpacity>
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => navigation.navigate('Web', { url: 'https://www.tmall.com' ,name:'天猫'})}>

                                <View style={{height:168}}>
                                    <Image style={styles.image} source={{uri:this.state.imgList[1]}} />
                                </View></TouchableOpacity>
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => navigation.navigate('Web', { url: 'https://www.vip.com' ,name:'唯品会'})}>

                                <View style={{height:168}}>
                                    <Image style={styles.image} source={{uri:this.state.imgList[2]}} />
                                </View></TouchableOpacity>
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => navigation.navigate('Web', { url: 'https://www.pinduoduo.com' ,name:'拼多多'})}>

                                <View style={{height:168}}>
                                    <Image style={styles.image} source={{uri:this.state.imgList[3]}} />
                                </View></TouchableOpacity>
                        </Swiper>
                    </View >
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <Button
                        onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com',name:'秋季换新潮' })}
                        title="Open profile screen"
                    />
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => navigation.navigate('Web', { url: 'https://www.baidu.com' ,name:'秋季换新潮'})}>
                        <View style={{height:96}}>
                            <Image style={styles.image} source={{uri:this.state.adList[0]}} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
