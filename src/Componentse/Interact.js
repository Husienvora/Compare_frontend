import { useEffect } from "react";
import { useNormalContext } from "../Context/Contex";
function Interact() {
  const { Messages, setMessages, Loading, SendMessage } = useNormalContext();
  useEffect(() => {}, [Messages]);

  return (
    <div className="Interact">
      {Messages.map((ele) => {
        if (
          ele.role == "system" ||
          (ele.role == "assistant" &&
            ele.content != "You are a helpful assistant.")
        ) {
          return (
            <div className="chatContainerai">
              <div className="chatMessage">{ele.content}</div>
            </div>
          );
        } else if (ele.role == "user") {
          return (
            <div className="chatContaineruser">
              <div className="chatMessage">{ele.content}</div>
            </div>
          );
        }
      })}
      {Loading ? (
        <div className="chatContainerai">
          <div className="chatMessage">
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      ) : (
        ""
      )}
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
