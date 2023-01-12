import React, { useContext } from "react";

import { useRouter } from "next/router";

import Chat from "./chat";
import Form from "./form";
import FeedbackContext, { ChatBoxProvider } from "./store";

function ChatBoxAdmin() {
  const { id, isChatTrigger, chat, message, setMessage, onSendMessage } =
    useContext(FeedbackContext);

  return (
    <div className="chatbox">
      <div className="chatbox-admin-root">
        <div className="chatbox-admin-grid">
          <header className="chatbox-admin-header">
            <h1>Hi, chat id: {id}:</h1>
          </header>
          <Chat chat={chat} isChatTrigger={isChatTrigger} />
          <Form
            message={message}
            setMessage={setMessage}
            onSendMessage={onSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default function ChatBoxAdminRoot() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ChatBoxProvider id={id as string}>
      <ChatBoxAdmin />
    </ChatBoxProvider>
  );
}
