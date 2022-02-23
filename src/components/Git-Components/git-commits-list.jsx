import React, { useEffect } from "react";
import { useGit } from "../../common/hooks";
import { columnDefinitions } from "../../common/services";

import _ from "lodash";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const GitCommitList = () => {
  const { gitCommits, getGitCommits } = useGit();

  useEffect(() => {
    getGitCommits();
    () => {};
  }, []);

  return gitCommits && gitCommits.length > 0 ? (
    <div
      className="ag-theme-alpine"
      style={{ height: `calc(100vh - 65px)`, width: "100%" }}
    >
      <AgGridReact
        columnDefs={columnDefinitions}
        rowData={gitCommits}
      />
    </div>
  ) : (
    <div style={{ margin: "auto", padding: 20 }}>Loading...</div>
  );
};

export default GitCommitList;
