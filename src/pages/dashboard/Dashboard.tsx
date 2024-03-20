import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import { PieChart, Pie, Tooltip } from "recharts";

interface Supply {
  category: string;
  amount: number;
}
const Dashboard = () => {
  const { data } = useGetAllSuppliesQuery("");

  const chartData = data?.data?.map((supply: Supply) => ({
    name: supply.category,
    value: supply.amount,
  }));
  return (
    <div className="max-w-[400px] mx-auto">
      <PieChart width={1000} height={500}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={chartData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
