import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {transformDataForPieChart} from "../utils/dataUtils";

const PieChartComponent = ({ data }) => {
  const transformedData = transformDataForPieChart(data)

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={transformedData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent;