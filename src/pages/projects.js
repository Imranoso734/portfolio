
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "../components/Projects/ProjectsStyles";
import {
    SectionTitle,
} from "../styles/GlobalComponents";
import { projects } from "../constants/constants";
import { Layout } from "../layout/Layout";



export default function Projects() {
    return (
        <>
            <Layout>
                <SectionTitle main>Projects</SectionTitle>
                {/* <GridContainer>
                    {projects.map((p, i) => {
                        return (
                            <BlogCard key={i}>
                                <Img src={p.image} />
                                <TitleContent>
                                    <HeaderThree title>{p.title}</HeaderThree>
                                    <Hr />
                                </TitleContent>
                                <CardInfo className="card-info">{p.description}</CardInfo>
                                <div>
                                    <TitleContent>Stack</TitleContent>
                                    <TagList>
                                        {p.tags.map((t, i) => {
                                            return <Tag key={i}>{t}</Tag>;
                                        })}
                                    </TagList>
                                </div>
                                <UtilityList>
                                    <ExternalLinks target="_blank" href={p.visit}>
                                        Visit
                                    </ExternalLinks>
                                    <ExternalLinks target="_blank" href={p.source}>
                                        Source
                                    </ExternalLinks>
                                </UtilityList>
                            </BlogCard>
                        );
                    })}
                </GridContainer> */}

            </Layout>
        </>
    )
};
