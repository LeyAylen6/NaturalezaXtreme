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
import { Box, Text } from '@chakra-ui/react';
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
      dispatch(getCountArticle());
    }, [dispatch]);
  
    const Count = useSelector((state) => state.articleCount);
    console.log(Count.articlesFounded)

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
        <Box fontSize="30px" marginBottom="20px" marginTop="20px">
          <Text>Sales Stadistics</Text>
        </Box>
        <Box width="500px" height="300px" margin="auto">
          <Bar data={chartData} options={chartOptions} />
        </Box>
      </Box>
    );
  };
  
  export default Stadistics;