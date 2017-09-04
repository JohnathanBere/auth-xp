import RX = require('reactxp');
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ detailInfo } : any) => {
    const { title, artist, thumbnail_image, image, url } = detailInfo;
    const { 
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle 
    } = styles;

    return (
        <Card>
            <CardSection>
                <RX.View style={ thumbnailContainerStyle }>
                    <RX.Image 
                        source={ thumbnail_image }
                        style={ thumbnailStyle }
                    />
                </RX.View>
                <RX.View style={ headerContentStyle }>
                    <RX.Text selectable={ true } style={ headerTextStyle }>{ title }</RX.Text>
                    <RX.Text selectable={ true }>{ artist }</RX.Text>
                </RX.View>
            </CardSection>
            
            <CardSection>
                <RX.Image
                    source={ image }
                    style={ imageStyle } 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => RX.Linking.openUrl(url) }>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles =  {
    headerContentStyle: RX.Styles.createViewStyle({
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, false),
    headerTextStyle: RX.Styles.createTextStyle({
        fontSize: 18
    }, false),
    thumbnailStyle: RX.Styles.createImageStyle({
        height: 50,
        width: 50
    }, false),
    thumbnailContainerStyle: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }, false),
    imageStyle: RX.Styles.createImageStyle({
        flex: 1,
        width: null,
        height: 300
    }, false)
};

export default AlbumDetail;