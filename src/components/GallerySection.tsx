import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type TGallery = {
  _id: string;
  image: string;
};
const GallerySection = () => {
  const { data } = useGetAllSuppliesQuery(undefined);
  return (
    <section className="mt-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Gallery</h2>
        <p>
          Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros
          aliquet massa euismod interdum. Vestibulum ac purus fringilla,
          faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non
          condimentum interdum.
        </p>
      </div>
      <div className="p-4 md:px-10 lg:px-24 mt-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {data?.data?.map((item: TGallery) => (
              <img
                key={item._id}
                src={item.image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
};

export default GallerySection;
