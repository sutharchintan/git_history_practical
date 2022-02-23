import React, { useState, useCallback, createContext, useContext } from "react";
import { executeApi } from "./base-context";
import { LoaderContext } from "./loader-context";
import { GitApi } from "../api";
import { getGitCommitsData } from "../services";

/**
 * git context
 */
export const GitContext = createContext();

/**
 * git data provider
 * @param {*} param0
 * @returns
 */
export const GitDataProvider = ({ children }) => {
  /**
   * use loader context
   */
  const { showLoading } = useContext(LoaderContext);

  /**
   * stores the state of git property
   */
  const [gitCommits, setGitCommits] = useState();

  const getCommits = async () => {
    const response = await executeApi(GitApi.getCommits, null, showLoading);
    if (response && response.length) {
      setGitCommits(getGitCommitsData(response));
      return response;
    } else {
      return null;
    }
  };

  /**
   * context value for property context provider
   */
  var contextValue = {
    gitCommits,
    getGitCommits: useCallback(async () => {
      return await getCommits();
    }, []),
  };

  return (
    <GitContext.Provider value={contextValue}>{children}</GitContext.Provider>
  );
};
