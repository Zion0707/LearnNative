//路由配置
import Home from '../page/Home';
import Center from '../page/Center';
import My from '../page/My';
import Detail from '../page/Detail';

import { 
    createAppContainer , 
    createStackNavigator, 
    createBottomTabNavigator 
} from 'react-navigation';

const homePage = createStackNavigator(
    {
        Home:{
            screen: Home
        },
        Detail:{
            screen: Detail
        }
    }
);

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: homePage
        },
        Center: {
            screen: Center
        },
        My: {
            screen: My
        },
    },
    {
        //默认页面
        initialRouteName: 'Home',
    }
);

  
export default createAppContainer(bottomTabNavigator);
