import { 
    createAppContainer, 
    createBottomTabNavigator, 
    createStackNavigator 
} from 'react-navigation';

import Home from '../pages/Home/Index';
import Detail from '../pages/Home/Detail';
import Center from '../pages/Center/Index';
import My from '../pages/My/Index';

//底部导航
const bottomTabNavigator = createBottomTabNavigator(
    {
        '首页':{
            screen: Home
        },
        '中心':{
            screen: Center
        },
        '我的':{
            screen: My
        }
    },
    {
        initialRouteName: '我的'
    }
);

//页面
const stackNavigator = createStackNavigator(
    {
        Home:{
            screen: bottomTabNavigator
        },
        Detail:{
            screen: Detail
        }
    }
);

export default createAppContainer(stackNavigator);