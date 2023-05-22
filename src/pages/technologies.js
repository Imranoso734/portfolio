import { List } from "../components/Technologies/TechnologiesStyles";
import TechnologyCompo from "../components/Technologies/TechnologyCompo";
import { Layout } from "../layout/Layout";
import { Section, SectionText, SectionTitle } from "../styles/GlobalComponents";

import { technologys } from '../constants/techbology';

export default function Technologies() {

    return (
        <>
            <Layout>
                <Section>
                    <SectionTitle>Technologies</SectionTitle>
                    <SectionText>
                        Throughout my career, I have gained extensive experience working with various technologies to achieve user goals. I specialize in building scalable and maintainable web applications.
                    </SectionText>
                    <List>
                        {
                            technologys.map(({ title, description, icon }) => (
                                <TechnologyCompo key={title} title={title} text={description} icon={icon} />
                            ))
                        }
                    </List>
                </Section>
            </Layout>
        </>
    )
};
