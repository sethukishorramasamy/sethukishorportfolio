import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.7rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "mr-3 border-[#3b5998] text-orange-600" // Active button text color
        : "mr-3 border-[#3b5998] text-[#3b5998]"; // Non-active button text color

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="bg-orange-600" // Adjusted mt-2 for margin at the top
                style={{
                    originX: 0,
                    height: "2px",
                    borderRadius: "50px"
                }}
            ></motion.div>
        </button>
    );
};

export default TabButton;
