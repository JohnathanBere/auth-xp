import RX = require('reactxp');

const Button = ({ onPress, children } : any) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <RX.Button onPress={ onPress } style={ buttonStyle }>
            <RX.Text style={ textStyle }>
                { children }
            </RX.Text>
        </RX.Button>
    );
};

const styles = {
    textStyle: RX.Styles.createTextStyle({
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }, false),
    buttonStyle: RX.Styles.createButtonStyle({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }, false)
}

export default Button;