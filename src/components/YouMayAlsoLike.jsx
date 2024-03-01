import React ,{ useState ,useEffect} from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";
import { red } from '@mui/material/colors'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,background: "lightgray" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "lightgray" }}
      onClick={onClick}
    />
  );
}

function YouMayAlsoLike(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };
    const [like, setLike]=useState([])
    useEffect(()=>{
        const likeInfo=async()=>{
            try {
                const response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h&locale=en&precision=2');
                setLike(response.data)
                console.log(response.data)
                
            } catch (error) {
                console.error("error handling the responce;",error)
            }
        }
        likeInfo();
    },[])

  return (
    <div className='m-3 mb-0 p-6'> 
         <p className='font-semibold m-3 text-lg'>{props.text}</p>
      <Slider {...settings}>
        {
            like.map((data)=>(
                <div className=' bg-white rounded-md border-2 ' >
                    <div className='flex items-center p-2 gap-2 '>
                        <img src={data.image} alt="image" className='h-8 w-8 object-cover rounded-full bg-white'/>
                        <p className='text-sm capitalize'>{data.symbol} </p>
                        {data.market_cap_change_percentage_24h>0?
                        (<>
                            <button className=' bg-green-100 text-green-700 p-1 flex items-center justify-center text-xs rounded-sm h-6 w-20'><VscTriangleUp/> {data ?data.market_cap_change_percentage_24h.toFixed(2)+' %' : 'N/A'} </button>
                         </>):
                        (<>
                          <button className=' bg-red-100 text-red-700 p-1 flex items-center justify-center text-xs rounded-sm h-6 w-20'><VscTriangleDown/> {data ?data.market_cap_change_percentage_24h.toFixed(2)+' %' : 'N/A'} </button>
                        </>)}
                    </div>
                    <p className='px-3 font-semibold'> ${data.current_price}</p>
                    <div className='p-2'>
                        <Stack direction="row" sx={{ width: '90%' }} >
                            <Box sx={{ flexGrow: 1}} >
                            {data.market_cap_change_percentage_24h>0?
                            <>
                                <SparkLineChart data={data.sparkline_in_7d.price} height={150} colors={['#59ce81']} fill="true"/>
                            </>:
                            <>
                                <SparkLineChart data={data.sparkline_in_7d.price} height={150} colors={['#ec5769']} fill="true"/>

                            </>}
                            </Box>
                        </Stack> 
                    </div>
                </div>
            ))
        }
      </Slider>
    </div>
  )
}

export default YouMayAlsoLike
