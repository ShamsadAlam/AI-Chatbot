import { createContext, useState } from "react";
import run from "../config/chatbot";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, seLoadingt] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    await run(prompt);
  };

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
