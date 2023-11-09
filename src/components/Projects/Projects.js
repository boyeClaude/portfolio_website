import React from "react";

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from "./ProjectsStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import {  myProjects, projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    // <GridContainer>
    //   {myProjects.map(({ id, image, title, description, source, tags, visit }) => (
    //     <BlogCard key={id}>
    //       <Img src={image} />  
    //       <TitleContent>
    //         <HeaderThree title>{title}</HeaderThree>
    //         <Hr />
    //       </TitleContent>
    //       <CardInfo>{description}</CardInfo>
    //       <br />
    //       <div>
    //         <TitleContent>Stack</TitleContent>

    //         <TagList>
    //           {tags.map((tag, i) => (
    //             <Tag key={i}>{tag}</Tag>
    //           ))}
    //         </TagList>
    //       </div>
    //       <UtilityList>
    //         <ExternalLinks href={source} target="_blank">
    //           Code
    //         </ExternalLinks>
    //         <ExternalLinks href={visit} target="_blank">
    //           Live
    //         </ExternalLinks>
    //       </UtilityList>
    //     </BlogCard>
    //   ))}
    // </GridContainer>
  </Section>
);

export default Projects;
