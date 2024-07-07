import UpdateModal from "@/components/UpdateModal/UpdateModal";
import ConfirmationModal from "@/components/confirmationModal/ConfirmationModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import {
  useDeleteSupplyMutation,
  useGetAllSuppliesQuery,
} from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";

import { Trash2 } from "lucide-react";
import { useState } from "react";

export type TSupply = {
  _id: string;
  image: string;
  category: string;
  title: string;
  amount: number;
  description: string;
};

const AllSupplies = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  const [deleteSupply] = useDeleteSupplyMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [supplyToDelete, setSupplyToDelete] = useState("");
  const user = useAppSelector(useCurrentUser);

  const role = user?.role;

  if (role !== "Admin") {
    return <div className="text-red-600">Your are not an admin!</div>;
  }
  // Handle delete

  const handleDelete = (_id: string) => {
    setSupplyToDelete(_id);
    setModalOpen(true);
  };

  //  Handle confirmation modal for delete

  const handleConfirmDelete = () => {
    deleteSupply(supplyToDelete);
    setModalOpen(false);
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
    setSupplyToDelete("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <h2>All Supplies</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((supply: TSupply) => (
            <TableRow key={supply._id}>
              <TableCell>{supply.title}</TableCell>
              <TableCell>{supply.category}</TableCell>
              <TableCell>{supply.amount}</TableCell>
              <TableCell>
                <img src={supply.image} alt="" className="w-10" />
              </TableCell>
              <TableCell>{supply.description}</TableCell>
              <TableCell>
                <div className="flex items-center gap-4">
                  <UpdateModal supplyData={supply} />
                  <Trash2
                    onClick={() => handleDelete(supply._id)}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmationModal
        isOpen={modalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AllSupplies;
