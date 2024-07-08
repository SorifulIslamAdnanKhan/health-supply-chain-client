import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import { PieChart, Pie, Tooltip } from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TSupply } from "./AllSupplies";
import { useGetAllVolunteersQuery } from "@/redux/features/volunteer/volunteerApi";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

interface Supply {
  category: string;
  amount: number;
}
const Dashboard = () => {
  const { data } = useGetAllSuppliesQuery("");
  const { data: VolunteersData } = useGetAllVolunteersQuery(undefined);
  const user = useAppSelector(useCurrentUser);

  const chartData = data?.data?.map((supply: Supply) => ({
    name: supply.category,
    value: supply.amount,
  }));

  const totalAmount = data?.data?.reduce(
    (sum: number, supply: Supply) => sum + supply.amount,
    0
  );

  // Calculate user-specific donations and categories
  const userDonations = data?.data?.filter(
    (supply: TSupply) => supply.email === user?.email
  );
  const userDonationAmount = userDonations?.reduce(
    (sum: number, donation: Supply) => sum + donation.amount,
    0
  );
  const userDonationCategories = new Set(
    userDonations?.map((donation: Supply) => donation.category)
  ).size;

  // Create chart data for user's donations
  const userChartData = userDonations?.map((supply: Supply) => ({
    name: supply.category,
    value: supply.amount,
  }));

  // Count of user's supplies
  const userSuppliesCount = userDonations?.length;

  return (
    <div className="px-5">
      {user?.role === "Admin" ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            <div className="bg-blue-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>Total Donation Amount</h4>
              <h3>{totalAmount}</h3>
            </div>
            <div className="bg-green-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>Supply Categories</h4>
              <h3>{data?.data?.length}</h3>
            </div>
            <div className="bg-rose-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>Volunteers</h4>
              <h3>{VolunteersData?.data?.length}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
            <div className="">
              <PieChart width={400} height={400}>
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
            <div>
              <div className="flex flex-col justify-center items-center gap-10 mt-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Image</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.data?.slice(0, 8).map((supply: TSupply) => (
                      <TableRow key={supply._id}>
                        <TableCell>{supply.title}</TableCell>
                        <TableCell>{supply.category}</TableCell>
                        <TableCell>{supply.amount}</TableCell>
                        <TableCell>
                          <img src={supply.image} alt="" className="w-10" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            <div className="bg-blue-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>My Donation Amount</h4>
              <h3>{userDonationAmount}</h3>
            </div>
            <div className="bg-green-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>My Donation Categories</h4>
              <h3>{userDonationCategories}</h3>
            </div>
            <div className="bg-rose-600 text-white space-x-2 py-10 text-center rounded-lg">
              <h4>My Supplies</h4>
              <h3>{userSuppliesCount}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
            <div className="">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={userChartData}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center gap-10 mt-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Image</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userDonations?.slice(0, 5).map((supply: TSupply) => (
                      <TableRow key={supply._id}>
                        <TableCell>{supply.title}</TableCell>
                        <TableCell>{supply.category}</TableCell>
                        <TableCell>{supply.amount}</TableCell>
                        <TableCell>
                          <img src={supply.image} alt="" className="w-10" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
