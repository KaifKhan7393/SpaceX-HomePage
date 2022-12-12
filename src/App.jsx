import React from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const Images = [
  {
    id: 1,
    title: 'RECENT LAUNCH',
    heading: 'STARLINK MISSION',
    btnText: 'Rewatch',
    bgImage: "https://cdn.pixabay.com/photo/2015/03/26/18/36/rocket-launch-693206_960_720.jpg",
  },
  {
    id: 2,
    title: 'SPACEX + T-MOBILE UPDATE',
    heading: 'STARSHIP UPDATE',
    btnText: 'Learn More',
    bgImage: "https://cdn.pixabay.com/photo/2020/05/31/09/15/starship-5241913_960_720.jpg",
  },
  {
    id: 3,
    heading: 'STARSHIP UPDATE',
    btnText: 'Learn More',
    bgImage: "https://cdn.pixabay.com/photo/2015/03/26/18/36/spacecraft-693218_960_720.jpg",
  },
  {
    id: 4,
    heading: 'STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON',
    btnText: 'Learn More',
    bgImage: "https://cdn.pixabay.com/photo/2015/03/26/18/36/spacex-693229_960_720.jpg",
  },
];

const
  App = () => {
    return (
      <div>
        <Header />
        {
          Images.map((image) => {
            return (
              <Banner key={image.id} bgImage={image.bgImage} title={image.title} heading={image.heading} btnText={image.btnText} />
            )
          })
        }
        <Footer />
      </div>
    )
  }

export default App