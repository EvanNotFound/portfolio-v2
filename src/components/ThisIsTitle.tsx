'use client'
import { motion } from "framer-motion";
import {ArrowDownIcon} from "@primer/octicons-react";

export default function ThisIsTitle() {
	return (
		<motion.div
            className="cursor-pointer"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					scale: 1,
                    opacity: 0,
                    x: 200
				},
				visible: {
					scale: 1,
                    opacity: 1,
                    x: -20,
					transition: {
						delay: 0,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 0.05,
					},
				},
			}}
            drag
            dragConstraints={{
              top: -10,
              left: -10,
              right: 100,
              bottom: 10,
            }}
		>
			<div className="font-normal text-2xl flex justify-between items-center translate-y-2">
				<h1 className="px-3 py-2 border border-black/5 bg-gray-50">This is</h1>
                {/* <div className="px-3 py-2 border border-black/5 bg-white/20">
                    <ArrowDownIcon size={28} />
                </div> */}
                
			</div>
		</motion.div>
	);
}
