import {Line } from 'react-chartjs-2'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, 
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, 
    Tooltip,
    Legend,
    Filler
)
const Stadistics = ( {cartArticles} ) => {
    const articlesLabels = cartArticles?.map((item) => item.name);
    const articlesQuantities = cartArticles?.map((item) => item.quantity);

    var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12,60]
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    
    var chartData = {
        labels: articlesLabels, 
        datasets : [
            {
        label: 'Cantidad Vendida',
        data:  articlesQuantities,
        tension : 0.5, 
        fill: true,
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgb(255,99,132,0.5)',
        pointRadius: 5, 
        ponitBorderColor: 'rgb(255,99,132)', 
        pointBackgroundColor: 'rgb(255,99,132)'
    }
    ]
    }
    var  chartOptions = {
        scales: {
            y: {
              beginAtZero: true,
              stepSize: 1,
            },
          },
    }

    return ( 
        <div>
         <Line data={chartData} options={chartOptions}/>
        </div>
    )

}
export default Stadistics;