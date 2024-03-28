import * as S from './App.styles.js';
import { AppRoutes } from "./routes";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCorses } from "store/slices/coursesSlice.js";
import { getWorkouts } from "store/slices/workoutsSlice.js";

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCorses());
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <S.Wrapper>
      <S.Container>
          <AppRoutes />
      </S.Container>
    </S.Wrapper>
  );
};