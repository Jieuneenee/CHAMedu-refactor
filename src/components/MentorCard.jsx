import React from "react";
import styled from "styled-components";
import { FaStar, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MentorCard = ({
  name,
  school,
  major,
  rating,
  reviewCount,
  students,
  admissionType,
  hashTag,
  imgUrl,
}) => {
  return (
    <Card as={Link} to="/post">
      <AdmissionTag>{admissionType}</AdmissionTag>
      <Info>
        <School>[{school}]</School>
        <School>{major}</School>
        <ProfileImg src={imgUrl} alt={name} />
        <Name>{name}</Name>
        <Review>
          <span>
            <FaStar color="#FFD700" /> {rating} ({reviewCount})
          </span>
          <span>
            <FaUser /> {students}명
          </span>
        </Review>
        <HagTags>{hashTag}</HagTags>
      </Info>
    </Card>
  );
};

export default MentorCard;

const Card = styled.div`
  width: 180px;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none; /* 밑줄 제거 */
  color: inherit;
`;

const AdmissionTag = styled.div`
  background: #99ddec;
  color: #ffffff;
  font-size: 15px;
  padding: 4px 8px;
  border-radius: 9px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const School = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-top: 4px;
`;

const Name = styled.div`
  font-size: 16px;
  margin-top: 4px;
`;

const Review = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 8px 0;
  gap: 10px;
`;

const HagTags = styled.div`
  font-size: 12px;
  color: #888;
`;
