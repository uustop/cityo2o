import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Homepage from './page/Homepage';
import Group from './page/Group';
import Like from './page/Like';
import Mine from './page/Mine';
// 注册tabs
const cityo2oTabs = TabNavigator({
    Homepage: {
        screen: Homepage,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内

                tabBarLabel: '首页',
                tabBarIcon: ({tintColor,focused}) => (<Image source={focused?require('./img/homepage_fill.png'):require('./img/homepage.png')} style={[{tintColor: tintColor},styles.icon]}/>),

        }
    },
    Group: {
        screen: Group,
        navigationOptions: {
              tabBarLabel: '社区',
              tabBarIcon: ({tintColor,focused}) => (<Image source={focused?require('./img/group_fill.png'):require('./img/group.png')} style={[{tintColor: tintColor},styles.icon]}/>),
        }
    },
    Like: {
        screen: Like,
        navigationOptions: {

                tabBarLabel: '收藏',
                tabBarIcon: ({tintColor,focused}) => (<Image source={focused?require('./img/like_fill.png'):require('./img/like.png')} style={[{tintColor: tintColor},styles.icon]}/>),

        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
                tabBarLabel: '我',
                tabBarIcon: ({tintColor,focused}) => (<Image source={focused?require('./img/mine_fill.png'):require('./img/mine.png')} style={[{tintColor: tintColor},styles.icon]}/>),

        }
    }
  }, {
      animationEnabled: false, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: false, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarOptions: {
          activeTintColor: '#7F01FB', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          },
          style: {
              backgroundColor: '#fff', // TabBar 背景色
              height: 55
          },
          labelStyle: {
              fontSize: 12, // 文字大小
          },
      },
});

const styles = StyleSheet.create({
  icon:{
    height:28,
    width:28,
  }
});

AppRegistry.registerComponent('cityo2o', () => cityo2oTabs);
