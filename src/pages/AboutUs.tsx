import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllVolunteersQuery } from "@/redux/features/volunteer/volunteerApi";

export type TVolunteer = {
  _id: string;
  image: string;
  name: string;
  phone: string;
  email: number;
  location: string;
};

const AboutUs = () => {
  const { data } = useGetAllVolunteersQuery(undefined);
  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Our Volunteers</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Picture</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((volunter: TVolunteer) => (
            <TableRow key={volunter._id}>
              <TableCell>
                <img src={volunter.image} alt="" className="w-16" />
              </TableCell>
              <TableCell>{volunter.name}</TableCell>
              <TableCell>{volunter.email}</TableCell>
              <TableCell>{volunter.phone}</TableCell>
              <TableCell>{volunter.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AboutUs;
