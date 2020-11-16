import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { RecentHistoryContext } from "../App";
import { variants } from "../styles/animations";

const Page1 = () => {
  const recentHistory = useContext(RecentHistoryContext);
  const previousRoute = recentHistory[1];

  let variant = variants.enterFromTop;
  if (previousRoute === "/page-2") variant = variants.enterFromLeft;
  if (previousRoute === "/page-3") variant = variants.enterFromLeft;

  return (
    <>
      <motion.div variants={variant} initial="enter" animate="visible">
        <h1>
          Welcome to the <strong>Nike Run</strong> store
        </h1>
        <img src="/assets/banner.jpg" alt="Banner" />
      </motion.div>
      <footer>
        <div>{/* Dummy element for flex */}</div>
        <Link to="/page-2">Next</Link>
      </footer>
    </>
  );
};

export default Page1;
