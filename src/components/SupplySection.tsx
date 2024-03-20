import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import { TSupply } from "@/pages/dashboard/AllSupplies";

const SupplySection = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  return (
    <section className="mt-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Supply Posts</h2>
        <p>
          Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros
          aliquet massa euismod interdum. Vestibulum ac purus fringilla,
          faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non
          condimentum interdum.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 p-4 md:px-10 lg:px-24 mt-10">
        {data?.data?.slice(0, 6).map((supply: TSupply) => (
          <Card key={supply._id}>
            <CardHeader>
              <img src={supply.image} alt="" />
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
      <div className="text-center mt-4">
        <Link to="/supplies">
          <Button>View All</Button>
        </Link>
      </div>
    </section>
  );
};

export default SupplySection;
