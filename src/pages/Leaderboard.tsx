import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";

export type TDonor = {
  _id: string;
  amount: string;
  email: number;
};
const Leaderboard = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Leaderboard</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((volunter: TDonor) => (
            <TableRow key={volunter._id}>
              <TableCell>{volunter.email}</TableCell>
              <TableCell>{volunter.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Leaderboard;
