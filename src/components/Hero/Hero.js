import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
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
        A frontend developer focusing on building web apps
      </SectionText>
      <Button>
        <AiOutlineCloudDownload size="3rem" style={{ marginRight: ".5rem" }} />{" "}
        <Link href="/images/cv-Boye-Frederic-2021.pdf">
          <a target="_blank" style={{ color: "white" }} download>
            Download CV
          </a>
        </Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
