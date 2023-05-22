import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";
import { Icon } from 'react-icons';

export default function TechnologyCompo({ icon: IconComponent, title, text}) {
    return (
        <>
            <ListItem>
                <picture>
                    <IconComponent size="5rem" />
                </picture>
                <ListContainer>
                    <ListTitle>{ title }</ListTitle>
                    <ListParagraph>
                        { text }
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </>
    )

};
