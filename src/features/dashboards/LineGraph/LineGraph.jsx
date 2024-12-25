import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const LineGraph = ({ data }) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="A" stroke="#8884d8" />
        <Line type="monotone" dataKey="B" stroke="#82ca9d" />
        <Line type="monotone" dataKey="C" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineGraph;