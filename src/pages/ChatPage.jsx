import styled from "styled-components";
const ChatPage = () => {
  return (
    <PageContainer>
      <h1>Chat Page</h1>
      <p>여기는 채팅 페이지입니다.</p>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 20px;
`;

export default ChatPage;
