import React from "react";
import styled from "styled-components";
import MentorCard from "../components/MentorCard";
import mentors from "../constants/json/mantor_list_sample.json";
import { Link } from "react-router-dom";
import { FaFire, FaGift, FaBook } from "react-icons/fa";

const MentorsPage = () => {
  const sections = [
    { title: "인기 멘토", icon: <FaFire color="red" />, data: mentors[0] },
    {
      title: "내 전형 추천 멘토",
      icon: <FaGift color="pink" />,
      data: mentors[1],
    },
    {
      title: "내 전공 추천 멘토",
      icon: <FaBook color="skyblue" />,
      data: mentors[2],
    },
  ];

  return (
    <PageContainer>
      <Header>
        <MoreLink to="/allMentors">모든 멘토 전체보기</MoreLink>
      </Header>

      {sections.map((section, idx) => (
        <Section key={idx}>
          <Title>
            {section.icon} {section.title}
          </Title>
          <CardWrapper>
            {section.data.map((mentor) => (
              <MentorCard key={mentor.id} {...mentor} />
            ))}
          </CardWrapper>
        </Section>
      ))}
    </PageContainer>
  );
};

export default MentorsPage;

const PageContainer = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0px;
  max-width: 1150px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const MoreLink = styled(Link)`
  font-size: 14px;
  color: #4caf4f;
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
