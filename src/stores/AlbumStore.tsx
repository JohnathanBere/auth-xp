import { StoreBase, AutoSubscribeStore, autoSubscribe } from 'resub';
import { serviceCallBack as call } from '../actions/ServiceCall';
import Album from '../models/Album';

@AutoSubscribeStore
export default class AlbumStore extends StoreBase {
    private _albums: Album[] = [];

    mapAlbumsToModel() {
        var self = this;

        call()
        .then((responseData) => {
            responseData.map((item : any) => {
                var album = new Album();

                album.artist = item.artist;
                album.image = item.image;
                album.thumbnail_image = item.thumbnail_image;
                album.title = item.title;
                album.url = item.url;

                self._albums = self._albums.concat(album);
                self.trigger();
            })
        })
        .catch((error) => {
            throw error;
        })
    }

    @autoSubscribe getAlbums() {
        return this._albums;
    }
}
