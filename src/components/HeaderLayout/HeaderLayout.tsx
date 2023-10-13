import Header from "../Header/Header";
import classes from "./HeaderLayout.module.scss";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.container}>{children}</main>
    </>
  );
};

export default HeaderLayout;
