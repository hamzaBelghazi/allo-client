import Navbar from "./Navbar";
import Footer from "./Footer";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
