//路由配置
import Home from '../page/Home';
import Center from '../page/Center';
import My from '../page/My';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
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
  
export default createAppContainer(AppNavigator);
