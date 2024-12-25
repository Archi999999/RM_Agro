import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="A" fill="#8884d8" />
        <Bar dataKey="B" fill="#82ca9d" />
        <Bar dataKey="C" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent;