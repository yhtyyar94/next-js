import dynamic from "next/dynamic";
import React from "react";

const ChatBoxAdmin = dynamic({
  loader: () => import("../../components/chatbox/index"),
  ssr: false,
});

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return <ChatBoxAdmin />;
}
