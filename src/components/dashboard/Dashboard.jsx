import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "SDT 1",
      math: 90,
      physics: 85,
      chemistry: 50
    },
    {
      id: 2,
      name: "SDT 2",
      math: 88,
      physics: 76,
      chemistry: 82
    },
    {
      id: 3,
      name: "SDT 3",
      math: 92,
      physics: 36,
      chemistry: 85
    },
    {
      id: 4,
      name: "SDT 4",
      math: 78,
      physics: 82,
      chemistry: 88
    },
    {
      id: 5,
      name: "SDT 5",
      math: 85,
      physics: 79,
      chemistry: 92
    },
    {
      id: 6,
      name: "SDT 6",
      math: 10,
      physics: 88,
      chemistry: 75
    },
    {
      id: 7,
      name: "SDT 7",
      math: 87,
      physics: 92,
      chemistry: 81
    },
    {
      id: 8,
      name: "SDT 8",
      math: 91,
      physics: 85,
      chemistry: 90
    },
    {
      id: 9,
      name: "SDT 9",
      math: 83,
      physics: 78,
      chemistry: 87
    },
    {
      id: 10,
      name: "SDT 10",
      math: 60,
      physics: 86,
      chemistry: 83
    }
  ];
  
  
  return (
    <div>
      
      <LineChart 
      width={600}
      height={400}
      data={students}
      margin={{
        top: 50,
        right: 30,
        left: 30,
        bottom: 30,
      }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name'/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line dataKey='math' stroke="#8884d8"/>
        <Line dataKey='physics' stroke="#82ca9d"/>
        <Line dataKey='chemistry'/>
        
      </LineChart>
    </div>
  );
};

export default Dashboard;