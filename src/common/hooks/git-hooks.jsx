import { useContext } from "react";
import { GitContext } from "../contexts";

export const useGit = () => useContext(GitContext);