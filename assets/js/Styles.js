import { StyleSheet } from 'react-native';
import Utils from './Utils';


const styles = StyleSheet.create({
    container:{
        
    },
    headerStyle:{
        backgroundColor:'#ddd',
        height: Utils.pTd(100),
        marginTop: Utils.platfrom=='ios' ? Utils.pTd(80) : 0
    },
    headerTextStyle:{
        textAlign: 'center',
        lineHeight: Utils.pTd(100),
        fontSize: Utils.pTd(30)
    }
});

export default styles;
