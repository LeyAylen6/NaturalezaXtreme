import { Bar } from 'react-chartjs-2'; 
import { useEffect, React } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend, 
    Filler,
} from 'chart.js';
import {getCountArticle, getArticles} from '../../redux/actions/actions'
import {getUsers} from '../../redux/actions/actionsUsers'
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import CircleIcon from '../CircleIcon/CircleIcon';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title, 
    Tooltip,
    Legend,
    Filler
)

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12,60]
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]



const Stadistics = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getCountArticle())
      dispatch(getUsers());
    }, [dispatch]);
  
    const Count = useSelector((state) => state.articleCount);
    console.log(Count)
    const users = useSelector((state)=> state.users)
   console.log(users)

   const logged = users.filter((users) => users.active).length

  console.log(logged) 

    const brand = []
    Count.articlesFounded?.map((article)  => brand.push(article.brand))
    const countSales = []
    Count.articlesFounded?.map((article)  => countSales.push(article.countSales))
    const chartData = {
        labels: brand,
        datasets: [
          {
            label: 'Articulos',
            data:countSales,
            backgroundColor: 'rgb(12,183,242,0.2)',
          },
        ],
     }
    const chartOptions = {
      responsive: true,
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 10,
        },
        x: {
          ticks: {
            color: "rgba(0, 220, 195)",
          },
        },
      },
    };
  
    return (
    <Box>  
        <HStack spacing={100} >

          <VStack>
            <Box fontSize="30px" pt={5}>
              <Text paddingLeft={280}>Sales Stadistics</Text>
            </Box>

            <Box width="700px" height="600px" margin="auto" pl={100}>
              <Bar data={chartData} options={chartOptions} />
            </Box>

          </VStack>

        <Box pl={50} fontSize={30}>
          <HStack>
            <Text >Online</Text>
            <CircleIcon boxSize={3} color='green.300' />
          </HStack>
            <Text>{logged}</Text>
        </Box>
       </HStack>
    </Box>  
    );
  };
  
  export default Stadistics;