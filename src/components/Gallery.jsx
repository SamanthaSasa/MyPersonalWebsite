import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery(){
    return(
        <div className="py-3 pb-5">
        <div className="pt-4 px-3">
        <h5 className='textRegular center-item textBrown py-4'>— Made with Film Rolls —</h5>
        <Carousel cols={3} rows={1} gap={20} loop>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/c4fRjCcP/41040009.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/TYxLK9rH/41040013.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/sXK85KM9/41040028.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/HWhvHrXx/41040030.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/YCw5K4BF/41040035.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/wv8yh8tL/18650029.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/dtBGjX6y/20220822182338.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/q7rC9HLw/18650013.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/cJ7fHLHP/18650008.png" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/rFQV8XMg/18650019.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/ncRJy4GP/18650036.jpg" />
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src="https://i.postimg.cc/D0JBZ4Nn/18650020.jpg" />
        </Carousel.Item>
        </Carousel>
        </div>

        <div className="px-3 py-4 pb-5">
        <h5 className='textRegular center-item textBrown py-4'>— Made with Digital Image Sensor —</h5>
        <Carousel cols={4} rows={1} gap={20} loop>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/VvFsy9v1/sunlight.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/d0707THm/20220822190348.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/c4Vkyqqx/leuven.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/6QN9Q1Zw/street.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/bvKwSKCb/20220822190334.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/Dzjn1Rx5/20220822190406.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/wjYKJ9g9/20220822190400.jpg" />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src="https://i.postimg.cc/fWSYFsQ4/20220822190316.jpg" />
        </Carousel.Item>
        </Carousel>
        <div className='pb-5'></div>
        </div>
        <div className="py-2"/>
        </div>
    )
}

export default Gallery;