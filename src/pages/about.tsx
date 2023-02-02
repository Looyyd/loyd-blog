import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";

const About: NextPage = () => {
  return (
    <>
      <MyHead page={"About"}></MyHead>
      <Navbar></Navbar>

      <main className="">

      </main>
    </>
  );
};

export default About;
