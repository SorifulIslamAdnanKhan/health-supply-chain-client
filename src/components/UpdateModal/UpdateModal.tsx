import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import HMForm from "../form/HMForm";
import HMInput from "../form/HMInput";
import { useUpdateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { Button } from "../ui/button";
import { FieldValues } from "react-hook-form";

type TUpdateModalProps = {
  supplyData: {
    _id: string;
    image: string;
    category: string;
    title: string;
    amount: number;
    description: string;
  };
};

const UpdateModal = ({ supplyData }: TUpdateModalProps) => {
  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const amount = parseFloat(data.amount);
    updateSupply({ id: supplyData._id, body: { ...data, amount } });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Pen className="text-green-500 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Supply</DialogTitle>
          <div>
            <HMForm onSubmit={onSubmit}>
              <div>
                <HMInput
                  type="text"
                  defaultValue={supplyData.title}
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div className="my-4">
                <HMInput
                  type="text"
                  defaultValue={supplyData.category}
                  name="category"
                  placeholder="Category"
                />
              </div>
              <div>
                <HMInput
                  type="number"
                  defaultValue={supplyData.amount}
                  name="amount"
                  placeholder="Amount"
                />
              </div>
              <div className="my-4">
                <HMInput
                  type="text"
                  defaultValue={supplyData.description}
                  name="description"
                  placeholder="Description"
                />
              </div>
              <div className="my-4">
                <HMInput
                  type="text"
                  defaultValue={supplyData.image}
                  name="image"
                  placeholder="Image"
                />
              </div>
              <div className="my-4">
                <Button type="submit">Update</Button>
              </div>
            </HMForm>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateModal;
