import { useContext } from "react";
import { motion } from "framer-motion";

import { RecentHistoryContext } from "../App";
import { Card, Link } from "../components";
import { variants } from "../styles/animations";

const shoes = [
  { name: "Nike ZoomX Vaporfly NEXT%", price: "£239.95", src: "zoomx_vaporfly.jpg" },
  { name: "Nike Air Zoom Pegasus 37", price: "£104.95", src: "zoom_pegasus_37.jpg" },
  { name: "Nike React Infinity Run Flyknit", price: "£139.95", src: "react_infinity_run.jpg" },
];

const Page2 = () => {
  const recentHistory = useContext(RecentHistoryContext);
  const previousRoute = recentHistory[1];

  let variant = variants.enterFromTop;
  if (previousRoute === "/page-1") variant = variants.enterFromRight;
  if (previousRoute === "/page-3") variant = variants.enterFromLeft;

  return (
    <>
      <motion.div variants={variant} initial="enter" animate="visible">
        <h1>
          Latest running shoes from <strong>Nike</strong>
        </h1>
        <div className="card-container">
          {shoes.map((shoe, index) => (
            <Card key={index} shoe={shoe} />
          ))}
        </div>
      </motion.div>
      <footer>
        <Link to="/page-1">Previous</Link>
        <Link to="/page-3">Next</Link>
      </footer>
    </>
  );
};

export default Page2;
