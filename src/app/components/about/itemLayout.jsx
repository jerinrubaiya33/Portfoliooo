"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

const ItemLayout = ({
    children,
    className,
    borderColor = "border-transparent",
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}

        className={clsx(
          "bg-black p-4 md:p-6 lg:p-8 flex items-center justify-center space-y-4 md:space-y-6 lg:space-y-8 border-2 font-supermercado",
          borderColor,
          className
        )}
      >
        {children}
      </motion.div>
    );
  };

  export default ItemLayout;