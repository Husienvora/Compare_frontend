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
  const [Loading, setLoading] = useState(false);
  const [CurrentlySelected, setCurrentlySelected] = useState(
    "openai:gpt-3.5-turbo-16k-0613"
  );
  const [Messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  // Socket initialization

  const SendMessage = async (msg) => {
    try {
      let payloadmsg = [...Messages, { role: "user", content: msg }];
      setLoading(true);
      setMessages(payloadmsg);
      let answer = "";
      answer = await axios.post(
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
      setLoading(false);
      console.log(Messages);
    } catch (error) {
      setTimeout(SendMessage(msg), 5000);
    }
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
    Loading,
    setLoading,
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
