import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import axios from "axios";
const NormalContext = createContext(null);

export default function NormalProvider({ children }) {
  const [modelsList, setmodelsList] = useState([]);
  const [CurrentlySelected, setCurrentlySelected] = useState(
    "openai:gpt-3.5-turbo-16k-0613"
  );
  const [Messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  // Socket initialization
  const SendMessage = async (msg) => {
    let payloadmsg = [...Messages, { role: "user", content: msg }];
    setMessages(payloadmsg);
    let answer = await axios.post(
      process.env.REACT_APP_API + "/chat",
      {
        modelname: CurrentlySelected,
        messages: payloadmsg,
        params: {
          maxTokens: 600,
        },
      },
      (res) => {
        return res.data;
      }
    );
    console.log(answer);
    payloadmsg = [...payloadmsg, { role: "assistant", content: answer.data }];
    setMessages(payloadmsg);
    console.log(Messages);
  };

  useEffect(() => {
    async function fethcList() {
      let { data } = await axios.get(
        process.env.REACT_APP_API + "/List_models"
      );

      setmodelsList(data);
    }
    fethcList();
  }, []);

  const contextValue = {
    modelsList,
    setCurrentlySelected,
    CurrentlySelected,
    Messages,
    setMessages,
    SendMessage,
  };
  return (
    <NormalContext.Provider value={contextValue}>
      {children}
    </NormalContext.Provider>
  );
}

export function useNormalContext() {
  return useContext(NormalContext);
}
