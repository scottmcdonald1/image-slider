import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import molly1 from '../public/molly1.JPG'
import molly2 from '../public/molly2.JPG'
import molly3 from '../public/molly3.JPG'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Image Slider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='flex justify-center px-2'>
          {/* <svg width="1408" height="300" viewBox="0 0 1408 315" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M253.544 1H306.131V313.732H268.415V55.9035V54.9035H267.415H266.535H265.837L265.596 55.558L170.521 313.732H136.61L41.5381 55.558L41.2971 54.9035H40.5997H39.7157H38.7157V55.9035V313.732H1V1H53.587L152.188 261.825L152.432 262.471H153.124H154.004H154.695L154.94 261.825L253.544 1Z" fill="black" stroke="black" stroke-width="2"></path>
            <path d="M525.325 143.433L524.646 143.663V144.38V145.262V146.104L525.475 146.247C541.82 149.074 556.926 156.679 567.945 169.357C578.957 182.027 585.946 199.832 585.946 223.173C585.946 251.97 575.684 274.565 557.414 289.978C539.122 305.41 512.694 313.732 480.218 313.732H345.387V1H471.397C503.448 1 529.008 8.56061 546.53 22.0853C564.023 35.5869 573.594 55.0964 573.594 79.2342C573.596 98.3872 567.934 112.232 559.123 122.375C550.295 132.538 538.237 139.063 525.325 143.433ZM384.079 34.2148H383.079V35.2148V131.614V132.614H384.079H477.575C500.181 132.614 514.824 127.751 523.803 119.072C532.794 110.382 535.905 98.0612 535.905 83.6332C535.905 69.1344 531.656 56.7436 522.705 47.9802C513.756 39.2181 500.242 34.2148 481.982 34.2148H384.079ZM384.075 165.829H383.075V166.829V279.518V280.518H384.075H384.079H484.187C509.715 280.518 525.798 273.757 535.479 263.077C545.143 252.415 548.25 238.036 548.25 223.173C548.25 206.017 542.891 191.667 533.255 181.599C523.615 171.526 509.779 165.829 493.005 165.829H384.075Z" fill="black" stroke="black" stroke-width="2"></path>
            <path d="M1074.6 313.732H1127.19V0.999939H1089.47V258.829V259.829H1088.47H1087.59H1086.89L1086.65 259.174L991.576 0.999939H957.665L862.593 259.174L862.352 259.829H861.654H860.77H859.77V258.829V0.999939H822.055V313.732H874.642L973.243 52.9078L973.487 52.2614H974.178H975.059H975.75L975.994 52.9078L1074.6 313.732Z" fill="black" stroke="black" stroke-width="2"></path>
            <path d="M1346.38 143.433L1345.7 143.663V144.38V145.262V146.104L1346.53 146.247C1362.87 149.074 1377.98 156.679 1389 169.357C1400.01 182.027 1407 199.832 1407 223.173C1407 251.97 1396.74 274.565 1378.47 289.978C1360.18 305.41 1333.75 313.732 1301.27 313.732H1166.44V1H1292.45C1324.5 1 1350.06 8.56061 1367.58 22.0853C1385.08 35.5869 1394.65 55.0964 1394.65 79.2342C1394.65 98.3872 1388.99 112.232 1380.18 122.375C1371.35 132.538 1359.29 139.063 1346.38 143.433ZM1205.13 34.2148H1204.13V35.2148V131.614V132.614H1205.13H1298.63C1321.24 132.614 1335.88 127.751 1344.86 119.072C1353.85 110.382 1356.96 98.0612 1356.96 83.6332C1356.96 69.1344 1352.71 56.7436 1343.76 47.9802C1334.81 39.2181 1321.3 34.2148 1303.04 34.2148H1205.13ZM1205.13 165.829H1204.13V166.829V279.518V280.518H1205.13H1205.13H1305.24C1330.77 280.518 1346.85 273.757 1356.53 263.077C1366.2 252.415 1369.31 238.036 1369.31 223.173C1369.31 206.017 1363.95 191.667 1354.31 181.599C1344.67 171.526 1330.83 165.829 1314.06 165.829H1205.13Z" fill="black" stroke="black" stroke-width="2"></path>
            <rect x="677.5" width="35.013" height="206.577" fill="black"></rect>
            <rect x="591.719" y="120.795" width="35.013" height="206.577" transform="rotate(-90 591.719 120.795)" fill="black"></rect>
          </svg> */}
        </div>

        <Carousel />

      </main>

    </div>
  )
}

const imgUrls = [
  'molly1.JPG',
  'molly2.JPG',
  'molly3.JPG',
]

function Carousel() {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlideIndex = getNextSlideIndex();
  const previousSlideIndex = getPreviousSlideIndex();

  function getPreviousSlideIndex() {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentSlideIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentSlideIndex - 1;
    return index;
  }

  function getNextSlideIndex() {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = currentSlideIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentSlideIndex + 1;
    return index;
  }

  const goToPreviousSlide = () => {
    setCurrentSlideIndex(previousSlideIndex);
  }

  const goToNextSlide = () => {
    setCurrentSlideIndex(nextSlideIndex);
  }

  return (
    <div className='w-full flex flex-columns justify-between content-evenly'>
      <Arrow clickFunction={goToPreviousSlide} glyph="<" />
      <div className='flex flex-columns h-96 w-full justify-evenly'>
        <ImageSlide url={imgUrls[previousSlideIndex]} active="false" />
        
        <ImageSlide url={imgUrls[currentSlideIndex]} active="true" />

        <ImageSlide url={imgUrls[nextSlideIndex]} active="false" />
        
      </div>
      <Arrow clickFunction={goToNextSlide} glyph=">" />
    </div>
  )
}

const ImageSlide = ({url, active}) => {

  const imgSize = active === 'true' ? 'h-full' : 'h-3/4';

  return (
    <div className='flex relative justify-center items-center'>
      <img src={url} className={imgSize} />
    </div>
  )
} 

const Arrow = ({ clickFunction, glyph }) => {
  return(
    <div
      className='flex font-sans text-5xl justify-center relative items-center cursor-pointer select-none'
      onClick={clickFunction}
    >
      {glyph}
    </div>
  )
}