// Import relevant libraries for making a component
import RX = require('reactxp');

const styles = {
    viewStyle: RX.Styles.createViewStyle({
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#DCDCDC',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    }, false),
    textStyle: RX.Styles.createTextStyle({
        fontSize: 20
    }, false)
}

interface HeaderProps {
    headerText : string;
}

export default class Header extends RX.Component<HeaderProps, null> {
    constructor() {
        super();
    }
    
    render() {
        return (
            <RX.View style={ styles.viewStyle }>
             <RX.Text style={ styles.textStyle }>
               {this.props.headerText}
            </RX.Text>
          </RX.View>
        )
    }
}