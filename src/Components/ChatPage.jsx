import { useState, useContext } from "react";
import { userContext } from "../Context/UserProvider";
import {
  BsChatRight,
  BsChevronDown,
  BsChevronUp,
  BsX,
  BsArrowRight,
} from "react-icons/bs";
import {
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Badge,
  Input,
  IconButton,
} from "@chakra-ui/react";
import "../styles/allcss.css";

const ChatPage = () => {
  const { users } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // New state to track the selected user
  const [chatMessages, setChatMessages] = useState([]); // State to store chat messages
  const [message, setMessage] = useState(""); // State to store the input message

  const getRandomStatus = () => {
    return Math.random() < 0.5 ? "online" : "offline";
  };

  const handleOpenChats = () => {
    setOpen(!open);
    setSelectedUser(null); // Reset the selected user when opening/closing the chat window
  };

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the selected user when a profile is clicked
    setOpen(true); // Open the chat window
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    // You can add logic to send the message to the server or wherever it needs to be sent
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { id: Math.random().toString(), text: message, sender: "user" },
    ]);
    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <Flex justify="flex-end" pr="2rem">
      <Box
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        w="22%"
        rounded="10px"
        style={{
          position: "absolute",
          right: "2.5%",
          top: "132%",
          transform: open ? "translateY(-100%)" : "translateY(0%)",
          zIndex: 1,
        }}
      >
        <Flex
          className="text-xl text-white bg-blue-900 p-4 flex items-end justify-between gap-[2rem] rounded-t-[10px] cursor-pointer"
          onClick={handleOpenChats}
        >
          <Icon as={BsChatRight} className="-mr-[1rem]" />
          <Text className="-ml-[5rem]">Chats</Text>
          <Icon as={open ? BsChevronUp : BsChevronDown} />
        </Flex>
        {open && (
          <Box
            className="p-2 custom-scrollbars overflow-y-auto scrollbar-thin"
            style={{ position: "relative" }}
          >
            {users?.map((user) => (
              <Box
                key={user.id}
                my="2"
                onClick={() => handleUserClick(user)} // Handle user click
                style={{ cursor: "pointer" }} // Show the pointer cursor on hover
              >
                <Flex align="center" pb="10px" justify="space-between">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={user.profilepicture}
                    alt={user.username}
                  />
                  <Text className="-ml-[8px] ">{user.name}</Text>
                  {getRandomStatus() === "online" ? (
                    <Badge colorScheme="green"></Badge>
                  ) : (
                    <Badge colorScheme="gray"></Badge>
                  )}
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        getRandomStatus() === "online" ? "green" : "gray",
                    }}
                  />
                </Flex>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {/* Render individual chat with the selected user */}
      {selectedUser && (
        <Box
          w="22%"
          bg="white"
          position="relative"
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          style={{
            position: "absolute",
            right: "27%",
            top: "132%",
            transform: open ? "translateY(-100%)" : "translateY(0%)",
            zIndex: 1,
          }}
        >
          <Flex
            className="text-x text-white bg-blue-900 p-4 flex items-center justify-between gap-[2rem] rounded-t-[10px]"
            onClick={handleOpenChats}
          >
            <Flex alignItems="center">
              <Image
                className="w-6 h-6 rounded-full"
                src={selectedUser.profilepicture}
                alt={selectedUser.username}
              />
              <Text className="ml-2">{selectedUser.name}</Text>
            </Flex>
            <Flex>
              <Icon as={BsChevronDown} style={{ cursor: "pointer" }} />
              <Icon
                as={BsX}
                onClick={() => setSelectedUser(null)}
                style={{ cursor: "pointer" }}
              />
            </Flex>
          </Flex>

          <Box p="4">
            {/* Chat messages */}
            {chatMessages.map((msg) => (
              <Flex
                key={msg.id}
                justify={msg.sender === "user" ? "flex-end" : "flex-start"}
              >
                <Box
                  bg={msg.sender === "user" ? "blue.500" : "gray.200"}
                  color={msg.sender === "user" ? "blue.900" : "black"}
                  p="2"
                  borderRadius="8px"
                  mb="2"
                  maxW="70%"
                  mr="10"
                >
                  {msg.text}
                </Box>
              </Flex>
            ))}
            {/* Input box */}
            <Flex align="center" pl="10px" pr="10px">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                borderRadius="5px"
                flex="1"
                mr="2"
                p="2"
              />
              <IconButton
                icon={<BsArrowRight />}
                onClick={handleSendMessage}
                colorScheme="blue"
                borderRadius="full"
              />
            </Flex>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default ChatPage;
