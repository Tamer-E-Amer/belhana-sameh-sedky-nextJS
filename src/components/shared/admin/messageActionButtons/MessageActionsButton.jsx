const MessageActionsButton = ({ title, icon, onClick }) => {
  return (
    <div
      className="border border-gray-line px-4 py-2 flex items-center justify-center gap-2 text-dark-gray rounded-full hover:cursor-pointer hover:border-gray-500 hover:border-2 transition duration300"
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default MessageActionsButton;
