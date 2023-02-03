import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import { Main } from "../components/Main";
import { MainHeader } from "../components/MainHeader";

const Home: NextPage = () => {
  return (
    <>
      <MyHead page={undefined}></MyHead>
      <Navbar></Navbar>

      <Main>
        <MainHeader title={"Filip Niedzielski"}/>

      </Main>
    </>
  );
};

export default Home;
