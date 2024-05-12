import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './App.css';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <motion.div className="cursor" style={{ left: mousePosition.x, top: mousePosition.y }}>
        </motion.div>
    );
}

export default Cursor;
