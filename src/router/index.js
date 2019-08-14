import { 
    createAppContainer, 
    createBottomTabNavigator, 
    createStackNavigator 
} from 'react-navigation';

import Home from '../pages/Home/Index';
    import HomeDetail from '../pages/Home/HomeDetail';
import Center from '../pages/Center/Index';
import My from '../pages/My/Index';
    import MyDetail from '../pages/My/MyDetail';

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
        initialRouteName: '首页'
    }
);

//页面显示
const stackNavigator = createStackNavigator(
    {
        Home:{
            screen: bottomTabNavigator,
            //设置不要头部导航
            navigationOptions: {
                header: null
            }
        },
        HomeDetail:{
            screen: HomeDetail
        },
        MyDetail:{
            screen: MyDetail
        }
    }
);

export default createAppContainer(stackNavigator);