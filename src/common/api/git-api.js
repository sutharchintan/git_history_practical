import { getData } from "./base-class";
import ApiUris from "./api-uris";

/**
 * Git Api method declarations
 */
export const GitApi = {
  /**
   * get git commits
   * @returns
   */
  getCommits() {
    return getData(ApiUris.git.getCommits);
  },
};
