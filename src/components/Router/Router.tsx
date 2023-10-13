import React from "react";
import { Routes, Route } from "react-router-dom";
import CharacterPage from "../../pages/CharacterPage/CharacterPage";
import FightPage from "../../pages/FightPage/FightPage";
import StartPage from "../../pages/StartPage/StartPage";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import HeaderLayout from "../HeaderLayout/HeaderLayout";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route
        path="/character"
        element={
          <HeaderLayout>
            <CharacterPage />
          </HeaderLayout>
        }
      ></Route>
      <Route
        path="/fight"
        element={
          //   <AuthFormContext.Provider value={{ user, setUser, token, setToken }}>
          <HeaderLayout>
            <FightPage />
          </HeaderLayout>
          //   </AuthFormContext.Provider>
        }
      ></Route>
      <Route
        path="*"
        element={
          <HeaderLayout>
            <PageNotFound />
          </HeaderLayout>
        }
      ></Route>
    </Routes>
  );
};
export default Router;
