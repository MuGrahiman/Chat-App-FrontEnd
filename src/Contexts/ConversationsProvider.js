import React, { useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationsContext = React.createContext();

const ConversationsProvider = ({ id, children }) => {
  const { contacts } = useContacts();
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  const createConversation = (recipients) => {
    setConversations((prevConversation) => [
      ...prevConversation,
      { recipients, messages: [] },
    ]);
  };

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });

      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => {
        return contact.id === message.sender;
      });

      const name = (contact && contact.name) || message.sender;
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    }); 
    const selected = index === selectedConversationIndex;

    return { ...conversation, messages, recipients, selected };
  });

  const addMessageToConversation = ({ recipients, text, sender }) => {
    setConversations((prevConversation) => {
      let madeChange = false;
      const newMessage = { sender, text };
      const newConversation = prevConversation.map((conversation) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          };
        }
        return conversation;
      });
      if (madeChange) {
        return newConversation;
      } else {
        return [...prevConversation, { recipients, messages: [newMessage] }];
      }
    });
  };

  const sendMessage = (recipients, text) => {
    addMessageToConversation({ recipients, text, sender: id });
  };

  const contextValue = {
    conversations: formattedConversations,
    createConversation,
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    selectedConversation: formattedConversations[selectedConversationIndex],
  };

  return (
    <ConversationsContext.Provider value={contextValue}>
      {children}
    </ConversationsContext.Provider>
  );
};

export const useConversations = () => useContext(ConversationsContext);

export default ConversationsProvider;

const arrayEquality = (a, b) => {
  if (a.length !== b.length) return false;
  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
};
