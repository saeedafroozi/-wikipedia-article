import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #a2a9b1;
  border-radius: 5px;
  line-height:1.2;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  padding: 12px;
  font-weight: bold;
`;

const ListItem = styled.span<{ indent: number }>`
  color: #1177b3;
  display: block;
  margin-left:15px;
  margin-bottom:3px;
  padding-left: ${(props) => `${props.indent * 20 - 20}px`};
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  sections: SectionViewModel[];
  title: string;
}

const ContentTree: React.FC<Props> = ({ sections, title }) => {
  return (
    <Container data-testid='ContentTree'>
      <Title>{title}</Title>
      <List>
        {sections.map((section) => {
          return (
            <ListItem indent={section.indentLevel} key={section.id}>
              {`${section.id} ${section.title}`}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default ContentTree;