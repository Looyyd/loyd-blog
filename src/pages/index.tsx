import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <MyHead page={undefined}></MyHead>
      <Navbar></Navbar>


      <main className="">

      </main>
    </>
  );
};

export default Home;
