import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateSupply = () => {
  const user = useAppSelector(useCurrentUser);

  const email = user?.email;
  const role = user?.role;

  const navigate = useNavigate();

  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = (data: FieldValues) => {
    const amount = parseFloat(data.amount);
    createSupply({ ...data, amount, email });
    navigate("/dashboard/admin/supplies");
  };

  if (role !== "Admin") {
    return <div className="text-red-600">Your are not an admin!</div>;
  }

  return (
    <div className="h-screen max-w-[1200px] mx-auto ">
      <h2 className="my-10 text-center">Create Supply</h2>
      <div className="w-full md:max-w-[450px] mx-auto p-4">
        <HMForm onSubmit={onSubmit}>
          <div>
            <HMInput
              type="text"
              name="title"
              className="dark:text-white"
              placeholder="Title"
            />
          </div>
          <div className="my-4">
            <HMInput
              type="text"
              name="category"
              className="dark:text-white"
              placeholder="Category"
            />
          </div>
          <div>
            <HMInput
              type="number"
              name="amount"
              className="dark:text-white"
              placeholder="Amount"
            />
          </div>
          <div className="my-4">
            <HMInput
              type="text"
              name="description"
              className="dark:text-white"
              placeholder="Description"
            />
          </div>
          <div className="my-4">
            <HMInput
              type="text"
              name="image"
              className="dark:text-white"
              placeholder="Image"
            />
          </div>
          <div className="my-4">
            <Button type="submit">Submit</Button>
          </div>
        </HMForm>
      </div>
    </div>
  );
};

export default CreateSupply;
