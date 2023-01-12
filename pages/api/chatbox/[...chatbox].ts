import createChatBoxAPI from '../../../components/chatbox/api'

const ChatBoxAPI = createChatBoxAPI({
  webhooks: [process.env.SLACK_WEBHOOK_URL!],
});

export default ChatBoxAPI;
