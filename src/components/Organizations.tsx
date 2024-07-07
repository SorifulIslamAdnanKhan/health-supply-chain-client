import Marquee from "react-fast-marquee";
import brandOne from "../../src/assets/images/organization/brand-01.png";
import brandTwo from "../../src/assets/images/organization/brand-02.png";
import brandThree from "../../src/assets/images/organization/brand-03.png";
import brandFour from "../../src/assets/images/organization/brand-04.png";
import brandFive from "../../src/assets/images/organization/brand-05.png";

const Organizations = () => {
  return (
    <section className="mt-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Organizations</h2>
        <p>
          Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros
          aliquet massa euismod interdum. Vestibulum ac purus fringilla,
          faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non
          condimentum interdum.
        </p>
      </div>
      <div className="mt-10">
        <Marquee>
          <div className="flex gap-24 items-center overflow-hidden">
            <img src={brandOne} alt="Brand One" className="w-32" />
            <img src={brandTwo} alt="Brand Two" className="w-32" />
            <img src={brandThree} alt="Brand Three" className="w-32" />
            <img src={brandFour} alt="Brand Four" className="w-32" />
            <img src={brandFive} alt="Brand Five" className="w-32" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Organizations;
