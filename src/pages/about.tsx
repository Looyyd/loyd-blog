import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import {Main} from "../components/Main";
import {MainHeader} from "../components/MainHeader";
import {Paragraph} from "../components/Paragraph";
import { Body } from "../components/Body";
import { LinkButton } from "../components/LinkButton";

const About: NextPage = () => {
  return (
    <>
      <MyHead page={"About"}></MyHead>
      <Body>
        <Navbar></Navbar>

        <Main>
          <MainHeader title={"About Me"}/>
          <Paragraph>
            <b>Hi, I&lsquo;m Filip, I have a passion for computers, video games and anything that helps me understand the world. </b>
          </Paragraph>
          <Paragraph>
            If you also like video games, and especially League checkout a site I made <a href={"https://draftkingdom.lol"}>DraftKingdom.lol</a>.
          </Paragraph>
          <Paragraph>
            <b>Follow on Twitter</b>, where I try to share anything I find interesting.
          </Paragraph>
          <h1>Socials</h1>
          <LinkButton link={"https://twitter.com/filip_niedz"} content={"Twitter"}/>
          <LinkButton link={"https://www.linkedin.com/in/filip-niedzielski/"} content={"LinkedIn"}/>
          <LinkButton link={"https://github.com/Looyyd"} content={"GitHub"}/>

        </Main>
      </Body>

    </>
  );
};

export default About;
