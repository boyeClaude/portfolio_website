import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey! I am <br />
        Frederic Boye
      </SectionTitle>
      <SectionText>
        A Frontend Developer focusing on building web apps. I have analytical skills and a focus on delivering original
        and effective web solutions.
      </SectionText>
      <Button>
        <AiOutlineCloudDownload size="3rem" style={{ marginRight: ".5rem" }} />
        <a
          style={{ color: "white" }}
          href="/RESUME-FREDERIC-BOYE-FRONTEND-DEVELOPER-2022.pdf"
          alt="my resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
