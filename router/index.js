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

//先创建底部导航，然后哪个页面要的话，就把它包含进去
const bottomTabNavigator = createBottomTabNavigator(
    {
        Home:{
            screen: Home
        },
        Center:{
            screen: Center
        },
        My:{
            screen: My
        },
    }
);
const stackNavigator = createStackNavigator(
    {
        Home:{
            screen: bottomTabNavigator
        },
        Detail:{
            screen: Detail
        }
    }
)
  
export default createAppContainer(stackNavigator);
