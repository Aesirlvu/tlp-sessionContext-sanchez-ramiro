import { useContext } from "react";
import { SessionContext } from "../context/SessionProvider";
const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    try {
      throw new Error("el hook debe utilizarse en un contexto adecuado. ❌");
    } catch (error) {
      console.error("fuera de contexto, SessionProvider. ❌", error);
    }
  }

  return context;
};

export default useSession;
