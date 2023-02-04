import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import { Main } from "../components/Main";
import { MainHeader } from "../components/MainHeader";
import { Body } from "../components/Body";
import { Paragraph } from "../components/Paragraph";
import Image from "next/image";
import pp from "../img/Photo Pro Round.jpeg"
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
            src={pp}
            className="rounded-full mt-3 mb-3"
            decoding={"sync"}
            alt={"Picture of the Author"}
            width={200}
            height={200}
          />
          <Paragraph>
            <b>Hi, I&lsquo;m Filip, a cybersecurity student with a passion for technology and innovation. </b>
            I am currently an intern at I-Tracing, a leading cybersecurity consulting firm based in Paris.
          </Paragraph>
          <Paragraph>
            Welcome to my personal website, which I use as an online business card and a platform to share my thoughts and insights on subjects I&lsquo;m passionate about, such as cybersecurity and the broader field of computer science.
            Join me on my journey of <b>learning, growth, and discovery</b>.
          </Paragraph>
          <Paragraph>
            Learn more about me on the <Link href={"/about"}><b>about page</b></Link>, and connect with me on my social media links.
            Check out <Link href={"/blog"}><b>my blog</b></Link> for my latest articles.
          </Paragraph>


        </Main>
      </Body>
    </>
  );
};

export default Home;
