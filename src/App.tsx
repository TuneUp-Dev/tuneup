import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import Loading from "./Loading";
import { Spinner } from "@nextui-org/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("hasLoaded");

    if (alreadyLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasLoaded", "true");
        setIsLoading(false);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        sessionStorage.getItem("hasLoaded") ? (
          <div className="fixed h-screen w-full flex justify-center items-center">
            <Spinner size="md" color="primary" className="brightness-[75%]" />
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
