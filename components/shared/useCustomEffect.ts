import { useEffect } from "react";

const useCustomEffect = (callback: () => void, dependencies: any[]) => {
  useEffect(() => {
    callback();
  }, [callback, dependencies]);
};

export default useCustomEffect;
