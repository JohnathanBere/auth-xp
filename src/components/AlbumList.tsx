import RX = require('reactxp');
import { ComponentBase } from 'resub';
import Album from '../models/Album';
import AlbumStore from '../stores/AlbumStore';
import AlbumDetail from './AlbumDetail';

interface AlbumListState {
    albums?: Album[];
}

const styles = {
    containerStyle: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 0
    }, false)
}

var store = new AlbumStore();

export default class AlbumList extends ComponentBase<{}, AlbumListState> {
    protected _buildState(props: {}, initialBuild: boolean): AlbumListState {
        return {
            albums: store.getAlbums()
        }
    }

    private _bind() {
        store.mapAlbumsToModel();
    }

    componentDidMount() {
        this._bind();
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={ this.state.albums.indexOf(album) } detailInfo = { album } />
        );
    }

    render() {
        return (
            <RX.ScrollView>
                <RX.View style={ styles.containerStyle }>
                    { this.renderAlbums() }
                </RX.View>
            </RX.ScrollView>
        );
    }
}