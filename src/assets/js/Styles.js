//公共样式表
import { 
    StyleSheet , 
    Platform 
} from 'react-native';
import { pTd } from './Utils';

const Styles = StyleSheet.create({
    listWrap:{
        marginTop: pTd(20)
    },
    listItem:{
        color: '#fff',
        backgroundColor: 'orangered',
        marginTop: pTd(10),
        marginRight: pTd(20),
        marginLeft: pTd(20),
        marginBottom: pTd(10),
    },
    hide:{
        display:'none'
    },
    loadText:{
        color:'#999'
    },
    flexItem:{
        width: pTd(100),
        height: pTd(100),
        margin: pTd(50)
    },
    margin40:{
        marginTop:pTd(40),
        marginRight:pTd(40),
        marginLeft:pTd(40),
        marginBottom:pTd(40),
    },
    scrollBox:{
        width:pTd(750),
        backgroundColor:'#ddd',
        marginTop:pTd(20),
        marginBottom:pTd(20),
        height:pTd(100),
    },
    myView:{
        position:'absolute',
        backgroundColor:'#f1f1f1',
        left:0,
        right:0,
        top:0,
        bottom:0
    },
    header:{
        backgroundColor:'orangered',
        height: Platform.OS === 'ios' ? pTd(170) : pTd(100),
        paddingTop: Platform.OS === 'ios' ? pTd(60) : 0,
    },
    headerText:{
        color:'#fff',
        lineHeight: Platform.OS === 'ios' ? pTd(110) : pTd(100),
        textAlign:'center',
    }
});

export default Styles;