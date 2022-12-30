import NavigationBar from "../navbar/navbar";
import "./index.scss";

const Main = (props) => {
  const { children } = props;

  return (
    <>
      <NavigationBar />
      <div>{children}</div>
    </>
  );
};
export default Main;
