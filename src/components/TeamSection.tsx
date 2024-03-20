import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section className="py-12">
      <div className="text-center max-w-2xl mx-auto p-2">
        <h2 className="mb-5">Our Members</h2>
        <p>
          Nunc vitae nisi vel nulla finibus commodo. Maecenas fringilla eros
          aliquet massa euismod interdum. Vestibulum ac purus fringilla,
          faucibus risus pellentesque, laoreet purus. Morbi scelerisque nibh non
          condimentum interdum.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 px-5 lg:mx-32">
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#3182CE",
            color: "white",
          }}
          className="flex flex-col bg-slate-50 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            className="w-full"
            alt="Willam David"
          />
          <h4 className="py-3">Willam David</h4>
          <p className="pb-3">COO</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#3182CE",
            color: "white",
          }}
          className="flex flex-col bg-slate-50 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            className="w-full"
            alt="Maria Luis"
          />
          <h4 className="py-3">Maria Luis</h4>
          <p className="pb-3">Organizer</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#3182CE",
            color: "white",
          }}
          className="flex flex-col bg-slate-50 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            className="w-full"
            alt="Andrew Jones"
          />
          <h4 className="py-3">Andrew Jones</h4>
          <p className="pb-3">Lead Doctor</p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#3182CE",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col bg-slate-50 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            className="w-full"
            alt="Anna Jones"
          />
          <h4 className="py-3">Anna Jones</h4>
          <p className="pb-3">Project Manager</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
