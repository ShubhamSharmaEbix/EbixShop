// import React from 'react';
// import { Line } from 'react-chartjs-2/dist/typedCharts';


// const data = {
//     labels,
//     datasets: [
//       {
//         fill: true,
//         label: 'Dataset 2',
//         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//     ],
//   };

// const Chart1 = () => {
//   return (
//     <div className="col-lg-12">
//         <div className="row">
//             <div className="col-12">
//                 <div className="card">
//                     <div className="card-body pb-0 d-flex justify-content-between">
//                         <div>
//                             <h4 className="mb-1">Product Sales</h4>
//                             <p>Total Earnings of the Month</p>
//                             <h3 className="m-0">$ 12,555</h3>
//                         </div>
//                         <div>
//                             <ul>
//                                 <li className="d-inline-block mr-3"><a className="text-dark text-decoration-none" href="#">Day</a></li>
//                                 <li className="d-inline-block mr-3"><a className="text-dark text-decoration-none" href="#">Week</a></li>
//                                 <li className="d-inline-block"><a className="text-dark text-decoration-none" href="#">Month</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="chart-wrapper">
//                        <Line data={data}/>
//                     </div>
//                     <div className="card-body">
//                         <div className="d-flex justify-content-between">
//                             <div className="w-100 mr-2">
//                                 <h6>Pixel 2</h6>
//                                 <div className="progress" style={{"height": "6px"}}>
//                                     <div className="progress-bar bg-danger" style={{"width": "40%"}}></div>
//                                 </div>
//                             </div>
//                             <div className="ml-2 w-100">
//                                 <h6>iPhone X</h6>
//                                 <div className="progress" style={{"height": "6px"}}>
//                                     <div className="progress-bar bg-primary" style={{"width": "80%"}}></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Chart1;

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Chart1() {
  return <Line options={options} data={data} />;
}
