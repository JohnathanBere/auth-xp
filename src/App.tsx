import RX = require('reactxp');
import Header from './components/header';
import AlbumList from './components/AlbumList';

const styles = {
    uiViewStyle: RX.Styles.createViewStyle({
        flexGrow: 1,
        flex: 1
    }, false)
}

class App extends RX.Component<{}, null> {
    render() {
        return (
            <RX.View style={ styles.uiViewStyle }>
                <Header headerText={ 'Auth' } />
                <AlbumList />
            </RX.View>
        );
    }
}

export = App;
