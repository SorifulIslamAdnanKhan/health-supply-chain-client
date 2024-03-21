import HMForm from "@/components/form/HMForm";
import HMInput from "@/components/form/HMInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  useGetAllCommentsQuery,
  usePostCommentMutation,
} from "@/redux/features/comment/comment.Api";
import { FieldValues } from "react-hook-form";

type TComment = {
  _id: string;
  name: string;
  comment: string;
};
const Community = () => {
  const { data } = useGetAllCommentsQuery(undefined);
  const [postComment] = usePostCommentMutation();
  const onSubmit = (data: FieldValues) => {
    console.log({ data });
    postComment(data);
  };
  return (
    <section>
      <div className="max-w-[1200px] mx-auto ">
        <h2 className="my-10 text-center">Community Gratitude Wall</h2>
        <div className="w-full md:max-w-[450px] mx-auto p-4">
          <HMForm onSubmit={onSubmit}>
            <div>
              <HMInput type="text" name="name" placeholder="User Name" />
            </div>
            <div className="my-4">
              <HMInput type="text" name="comment" placeholder="Comment" />
            </div>
            <div className="my-4">
              <Button type="submit">Submit</Button>
            </div>
          </HMForm>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-center p-4">Comments</h2>
        <div className="grid gap-4 p-4 md:px-10 lg:px-24 mt-10">
          {data?.data?.map((comment: TComment) => (
            <Card key={comment._id}>
              <CardContent>
                <div className="mt-4">
                  <CardTitle>{comment.name}</CardTitle>
                </div>
                <div className="mt-4 font-bold">
                  <CardDescription>{comment.comment}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
