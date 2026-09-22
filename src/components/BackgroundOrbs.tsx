import { motion } from "framer-motion";

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, -50, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gold/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, -100, 100, -100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-yellow-600/10 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default BackgroundOrbs;
