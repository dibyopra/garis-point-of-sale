import { Image } from 'react-native';
import FastImage from 'react-native-fast-image';

export function preloadImages() {
  const images = [
    require('@assets/images/image'),
  ];

  const uris = images.map(image => ({
    uri: Image.resolveAssetSource(image).uri
  }));

  FastImage.preload(uris);
}