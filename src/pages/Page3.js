import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { RecentHistoryContext } from "../App";
import { variants } from "../styles/animations";

const Page3 = () => {
  const recentHistory = useContext(RecentHistoryContext);
  const previousRoute = recentHistory[1];

  let variant = variants.enterFromTop;
  if (previousRoute === "/page-2") variant = variants.enterFromRight;
  if (previousRoute === "/page-3") variant = variants.enterFromRight;

  return (
    <>
      <motion.div variants={variant} initial="enter" animate="visible">
        <h1>Thanks for stopping by</h1>
        <img src="/assets/banner2.jpg" alt="Banner" />
      </motion.div>
      <footer>
        <Link to="/page-2">Previous</Link>
        <div>{/* Dummy element for flex */}</div>
      </footer>
    </>
  );
};

export default Page3;
