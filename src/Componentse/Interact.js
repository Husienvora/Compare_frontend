import { useEffect } from "react";
import { useNormalContext } from "../Context/Contex";
function Interact() {
  const { Messages, setMessages, SendMessage } = useNormalContext();
  useEffect(() => {}, [Messages]);

  return (
    <div className="Interact">
      {Messages.map((ele) => {
        if (ele.role == "system" || ele.role == "assistant") {
          return (
            <div className="chatContainerai">
              <div className="chatMessage">{ele.content}</div>
            </div>
          );
        } else {
          return (
            <div className="chatContaineruser">
              <div className="chatMessage">{ele.content}</div>
            </div>
          );
        }
      })}
      <div className="Chathide"></div>
      <div className="inputContainer">
        <input className="input" type="text" placeholder="Send a message" />
        <button
          onClick={() => {
            // console.log(document.getElementsByClassName("input")[0].value);
            SendMessage(document.getElementsByClassName("input")[0].value);
          }}
          className="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Interact;
