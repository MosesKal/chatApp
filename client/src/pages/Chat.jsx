import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { Container, Stack } from "react-bootstrap";

const Chat = () => {
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  console.log("UserChats", userChats);

  return (
    <Container>
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="flex-grow-0">List</Stack>
          <p>ChatBox</p>
        </Stack>
      )}
    </Container>
  );
};

export default Chat;
