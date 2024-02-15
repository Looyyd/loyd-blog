import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import { Main } from "../components/Main";
import { MainHeader } from "../components/MainHeader";
import { Body } from "../components/Body";
import { Paragraph } from "../components/Paragraph";
import Image from "next/image";
import pp from "../img/Jojo.png"
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <MyHead page={undefined}></MyHead>
      <Body>
        <Navbar></Navbar>

        <Main>
          <MainHeader title={"Filip Niedzielski"}/>
          <Image
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
            src={pp}
            className="rounded-full mt-3 mb-3"
            decoding={"sync"}
            alt={"Picture of the Author"}
            width={200}
            height={200}
          />
          <Paragraph>
            <b>Hi, I&lsquo;m Filip, I have a passion for computers, video games and anything that helps me understand the world. </b>
          </Paragraph>
          <Paragraph>
            Welcome to my domain, make yourself at home.
          </Paragraph>
          <Paragraph>
            Learn more about me on the <Link href={"/about"}><b>about page</b></Link>.
            You can also check out <Link href={"/blog"}><b>my blog</b></Link>, where maybe I have written about something that you are interested in.
          </Paragraph>


        </Main>
      </Body>
    </>
  );
};

export default Home;
