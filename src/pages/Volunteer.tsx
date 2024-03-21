import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useCreateVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { FieldValues } from "react-hook-form";

const Volunteer = () => {
  const [createVolunteer] = useCreateVolunteerMutation();
  const onSubmit = (data: FieldValues) => {
    createVolunteer(data);
  };
  return (
    <div className="h-screen max-w-[1200px] mx-auto ">
      <h2 className="my-10 text-center">Volunteer</h2>
      <div className="w-full md:max-w-[450px] mx-auto p-4">
        <HMForm onSubmit={onSubmit}>
          <div>
            <HMInput
              type="text"
              name="name"
              className="dark:text-white"
              placeholder="Name"
            />
          </div>
          <div className="my-4">
            <HMInput
              type="email"
              name="email"
              className="dark:text-white"
              placeholder="Email"
            />
          </div>
          <div>
            <HMInput
              type="text"
              name="phone"
              className="dark:text-white"
              placeholder="Phone"
            />
          </div>
          <div className="my-4">
            <HMInput
              type="text"
              name="location"
              className="dark:text-white"
              placeholder="Location"
            />
          </div>
          <div>
            <HMInput
              type="text"
              name="image"
              className="dark:text-white"
              placeholder="Picture"
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

export default Volunteer;
