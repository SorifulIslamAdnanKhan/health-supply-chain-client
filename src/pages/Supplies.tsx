import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TSupply } from "./dashboard/AllSupplies";
import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Supplies = () => {
  const { data } = useGetAllSuppliesQuery(undefined);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 md:px-10 lg:px-24 mt-10">
      {data?.data?.map((supply: TSupply) => (
        <Card key={supply._id}>
          <CardHeader>
            <img src={supply.image} alt="" className="w-full" />
          </CardHeader>
          <CardContent>
            <CardTitle>{supply.title}</CardTitle>
            <div className="mt-4 font-bold">
              <CardDescription>{supply.category}</CardDescription>
              <CardDescription>{supply.amount}</CardDescription>
            </div>
            <div className="text-center mt-4">
              <Link to={`/supplies/${supply._id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Supplies;
