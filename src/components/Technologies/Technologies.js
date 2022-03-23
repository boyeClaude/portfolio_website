import React from "react";
import { DiAngularSimple, DiFirebase, DiReact, DiZend } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here some of technologies and tools I am working with
      {/* I've worked with a range of technologies in the web development world. I
      am now focusing to sharp my skills in the frontend field by learning some
      of the Javascript Framework such as Angular, Reactjs and Nodejs */}
    </SectionText>
    <List>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Currently learning <br />
            Nodejs and DataBases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Currently learning <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
