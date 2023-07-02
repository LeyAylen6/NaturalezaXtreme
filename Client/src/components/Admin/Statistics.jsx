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
import {getCountArticle} from '../../redux/actions/actions'
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




const Stadistics = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCountArticle());
    }, [dispatch]);
    
    const Count = useSelector((state) => state.articleCount)
    console.log(Count) 
  
 
    const midata = {
        labels: Count && Array.isArray(Count) ? Count.map((item) => item.name) : [],
        datasets: [
          {
            label: 'Articulos',
            data: Count && Array.isArray(Count) ? Count.map((item) => item.countSales) : [],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

var misoptions = {
    responsive: true,
    animation: false,
    plugins : {
        legend : {
            display : false 
        }
    },
    scales : {
        y : {
            min : -25,
            max : 100
        },
        x : {
            ticks: {
                color: 'rgba(0,220,195)'
            }
        }
    }
}

    return ( 
        <div>
         <Bar data={midata} options={misoptions}/>
        </div>
    )

}
export default Stadistics; 