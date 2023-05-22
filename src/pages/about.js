import { Layout } from "../layout/Layout";
import { SectionTitle,SectionText } from "../styles/GlobalComponents";


export default function About() {
    return (
        <Layout>
            <SectionTitle main>About Me</SectionTitle>
            {/* <SectionTitle>About Me</SectionTitle> */}
            <SectionText>
                Hello, I'm Muhammad Imran. I embarked on my journey as a developer after completing my graduation in 2018. Since 2019, I have been passionately pursuing my career as a Full stack developer.
                <b />
                My expertise initially started in Backend development, where I honed my skills in handling server-side logic and building robust web applications. However, my curiosity and drive for continuous learning led me to become a Full stack developer, capable of handling both the front-end and back-end aspects of web development.
                <b />
                With a strong foundation in backend technologies and frameworks, I expanded my knowledge to encompass the entire web development spectrum. This enables me to create seamless user experiences by integrating intuitive interfaces with efficient server-side functionalities.
                <b />
                I have hands-on experience with various technologies, including JavaScript, PHP, Laravel, MySQL, Node.js, React.js, and more. This diverse skill set empowers me to tackle complex projects, from crafting custom themes and plugins in WordPress to developing store solutions and integrating apps in Shopify.
                <b />
                Throughout my journey, I have developed a deep understanding of RESTful APIs, CSS frameworks, and database management systems like MySQL and PostgreSQL. Additionally, I am proficient in utilizing modern tools such as Sass and Bootstrap to create responsive and visually appealing websites.
                <b />
                I am dedicated to delivering high-quality solutions that meet user goals and exceed expectations. I thrive in collaborative environments, where I can effectively communicate with team members and contribute to the success of projects.
                <b />
                I am excited to continue my growth as a Full stack developer, staying updated with the latest technologies and industry trends. Let's work together to bring your ideas to life and create exceptional digital experiences.

            </SectionText>
        </Layout>
    )
};
