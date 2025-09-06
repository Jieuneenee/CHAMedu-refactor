import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import MentorCard from "../components/MentorCard";
import mentors from "../constants/json/AllMentors_list_sample.json";

const AllMentorsPage = () => {
  return (
    <PageContainer>
      <SearchWrapper>
        <input type="text" placeholder="멘토 or 학과 or 학교를 검색하세요!" />
        <SearchIcon />
      </SearchWrapper>

      <SortWrapper>
        <select>
          <option value="전체">전체</option>
          <option value="별점순">별점순</option>
          <option value="인기순">인기순</option>
        </select>
      </SortWrapper>

      <CardsWrapper>
        {mentors.map((mentor) => (
          <MentorCardWrapper key={mentor.id}>
            <MentorCard {...mentor} />
          </MentorCardWrapper>
        ))}
      </CardsWrapper>
    </PageContainer>
  );
};

export default AllMentorsPage;

const PageContainer = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;

  input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border-radius: 9px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4caf4f;
    }
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
  font-size: 18px;
`;

const SortWrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  background-color: #f5f7fa;
  padding: 10px 0;
  z-index: 10;
  margin-top: -10px;
  margin-left: 70px;
  select {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MentorCardWrapper = styled.div`
  flex: 1 1 calc(20% - 20px);
  max-width: 200px;
  min-width: 150px;
`;
