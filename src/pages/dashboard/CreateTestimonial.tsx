import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import { useCreatetTestimonialMutation } from "@/redux/features/testimonial/testimonial.Api";
import { FieldValues } from "react-hook-form";

const CreateTestimonial = () => {
  const [createTestimonial] = useCreatetTestimonialMutation();
  const onSubmit = (data: FieldValues) => {
    createTestimonial(data);
  };
  return (
    <div className="h-screen max-w-[1200px] mx-auto ">
      <h2 className="my-10 text-center">Create Testimonial</h2>
      <div className="w-full md:max-w-[450px] mx-auto p-4">
        <HMForm onSubmit={onSubmit}>
          <div>
            <HMInput
              type="text"
              name="author"
              className="dark:text-white"
              placeholder="Author"
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

export default CreateTestimonial;
