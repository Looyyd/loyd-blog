import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import { Main } from "../components/Main";
import { MainHeader } from "../components/MainHeader";
import { Body } from "../components/Body";

const Home: NextPage = () => {
  return (
    <>
      <MyHead page={undefined}></MyHead>
      <Body>
        <Navbar></Navbar>

        <Main>
          <MainHeader title={"Filip Niedzielski"}/>

        </Main>
      </Body>
    </>
  );
};

export default Home;
