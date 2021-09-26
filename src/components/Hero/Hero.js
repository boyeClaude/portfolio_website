import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey! I am <br />
        Frederic Boye
      </SectionTitle>
      <SectionText>
        A frontend developer focusing on building web apps
      </SectionText>
      <Button>
        <AiOutlineCloudDownload size="3rem" style={{ marginRight: ".5rem" }} />{" "}
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
