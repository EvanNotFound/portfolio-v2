'use client'
import { motion } from "framer-motion";

export default function NameTitle() {
	return (
		<motion.div
            className="cursor-pointer"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					scale: 1,
					opacity: 0,
                    x: -100,
                    
				},
				visible: {
					scale: 1,
					opacity: 1,
                    x: 20,
					transition: {
						delay: 0.05,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 0.1,
					},
				},
			}}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
		>
			<div className="font-bold text-8xl px-6 py-4 border border-black/5 bg-gray-50">
				<h1>Jiashao Luo</h1>
			</div>
		</motion.div>
	);
}
