import RX = require('reactxp');

const CardSection = (props : any) => {
    return(
        <RX.View style={ styles.containerStyle }>
            { props.children }
        </RX.View>
    );
};

const styles = {
    containerStyle: RX.Styles.createViewStyle({
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }, false)
};

export default CardSection;