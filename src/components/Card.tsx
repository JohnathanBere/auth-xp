import RX = require('reactxp');

const Card = (props : any) => {
    return (
        <RX.View style={ styles.containerStyle }>
            { props.children }
        </RX.View>
    );
};

const styles = {
    containerStyle: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        width: 350
    }, false)
};

export default Card;