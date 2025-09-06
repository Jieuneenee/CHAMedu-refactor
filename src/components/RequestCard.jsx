import React from "react";
import styled from "styled-components";

const RequestCard = ({ name, school, major, email, profileImageUrl }) => {
  return (
    <Card>
      <ProfileImage src={profileImageUrl} alt="프로필" />
      <Name>{name}</Name>
      <Info>
        {school} {major}
      </Info>
      <Info>{email}</Info>
      <Button>상담 신청하기</Button>
    </Card>
  );
};

export default RequestCard;

const Card = styled.div`
  width: 200px;
  height: 330px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  background-color: #fff;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 170px;
  height: 170px;
`;

const Name = styled.h3`
  margin: 20px 0 20px;
`;

const Info = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  background: #4caf4f;
  color: white;
  border: none;
  padding: 5px 12px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 9px;
  margin-top: 25px;
  &:hover {
    background: #3a692c;
  }
`;
