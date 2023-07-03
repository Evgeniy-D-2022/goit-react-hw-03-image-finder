import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, imageAlt, imageModal })=>{
  return (
    <li className={css.ImageGalleryItem}>
  <img 
  className={css.ImageGalleryItem_image}
  src={webformatURL} 
  alt={imageAlt} 
  data-src={imageModal}
   />
</li>
  )
};

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string,
  imageAlt: PropTypes.string,
  imageModal: PropTypes.string,
}




