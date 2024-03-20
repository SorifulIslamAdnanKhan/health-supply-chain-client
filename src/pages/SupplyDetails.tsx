import DonateModal from "@/components/DonateModal/DonateModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoaderData } from "react-router-dom";

type TSupplyData = {
  _id: string;
  image: string;
  amount: number;
  description: string;
  title: string;
  category: string;
};

type TData = {
  data: TSupplyData;
};

const SupplyDetails = () => {
  const supply = useLoaderData() as TData;

  const { data } = supply;

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <Card>
        <CardHeader>
          <img src={data?.image} alt="" className="w-full" />
        </CardHeader>
        <CardContent>
          <CardTitle>{data?.title}</CardTitle>
          <div className="mt-4 font-bold">
            <CardDescription>{data?.category}</CardDescription>
            <CardDescription>{data?.amount}</CardDescription>
            <CardDescription>{data?.description}</CardDescription>
          </div>
          <div className="text-center mt-4">
            <DonateModal data={data} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplyDetails;
