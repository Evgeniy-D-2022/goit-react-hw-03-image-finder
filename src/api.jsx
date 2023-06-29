import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const options = {
    key: '35854540-bba533f8f1dc090f652d8ed86',
    page: 1,
    per_page: 12,
    Image_type: 'photo',
    orientation: 'horizontal',
};

async function searchPictures (searchImage, page) {

}

export default searchPictures;



