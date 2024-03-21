import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

type TDonateModalProps = {
  data: {
    _id: string;
    image: string;
    category: string;
    title: string;
    amount: number;
    description: string;
  };
};
const DonateModal = ({ data }: TDonateModalProps) => {
  const user = useAppSelector(useCurrentUser);

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Donate Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Donate</DialogTitle>
          <div>
            <form>
              <div className="my-2">
                <DialogTitle>User Info</DialogTitle>
              </div>
              <div>
                <Input
                  type="email"
                  className="dark:text-white"
                  defaultValue={user?.email}
                />
              </div>
              <div className="mt-4">
                <div className="my-2">
                  <DialogTitle>Supply Info</DialogTitle>
                </div>
                <div>
                  <Input
                    type="text"
                    className="dark:text-white"
                    defaultValue={data.title}
                  />
                </div>
                <div className="my-4">
                  <Input
                    type="text"
                    className="dark:text-white"
                    defaultValue={data.category}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    className="dark:text-white"
                    defaultValue={data.amount}
                  />
                </div>
                <div className="my-4">
                  <Input
                    type="text"
                    className="dark:text-white"
                    defaultValue={data.description}
                  />
                </div>
                <div className="my-4">
                  <Input
                    type="text"
                    className="dark:text-white"
                    defaultValue={data.image}
                  />
                </div>
                <div className="my-4">
                  <Link to="/dashboard">
                    <Button type="submit">Donate</Button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DonateModal;
