import MainContainer from "./navigation/MainContainer";
import { decode } from "base-64";

if (typeof atob === "undefined") {
  global.atob = decode;
}

export default function App() {
  return <MainContainer />;
}
