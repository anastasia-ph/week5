import React from 'react'; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './App.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Sleep', 'Study', 'Activities', 'Hobby', 'Rest'],
  datasets: [
    {
      label: 'Daily activities',
      data: [9, 5, 4, 3, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

function App(){
  return(
    <div>
<h2 className="chartHeader">Daily activites</h2>
<Pie data={data} />
</div>

  )
  
};
export default App
