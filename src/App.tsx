import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

const generateRandomData = (length: number) => {
  const titles = ["Chain Set", "Bracelet", "Necklace", "Earrings", "Ring"];
  const subtitles = ["Gold", "Silver", "Platinum", "Diamond", "Emerald"];
  const ratings = ["4.0", "4.5", "5.0", "3.5", "4.2"];
  const prices = ["1,000", "2,500", "3,000", "4,500", "5,000"];
  const currency = "₹";

  const dataArray = Array.from({ length }, () => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
    const randomRating = ratings[Math.floor(Math.random() * ratings.length)];
    const randomPrice = prices[Math.floor(Math.random() * prices.length)];
    const randomId = Math.floor(Math.random() * 508) + 1;

    const image = `https://picsum.photos/id/${randomId}/200/300`;
    // https://source.unsplash.com/random/1920x1080/?wallpaper,landscape

    return {
      image,
      rating: randomRating,
      title: randomTitle,
      subTitle: randomSubtitle,
      price: randomPrice,
      currency,
    };
  });

  return dataArray;
};

const dummyData = generateRandomData(16);


function App() {


  return (
    <>
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "4rem"
      }}>
        {

          dummyData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  currency={data.currency}
                  image={data.image}
                  price={data.price}
                  rating={data.rating}
                  subTitle={data.subTitle}
                  title={data.title}
                />
              </React.Fragment>
            );
          })
        }
      </div>
    </>
  )
}

export default App
