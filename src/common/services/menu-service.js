import { componentNames } from "../constants";

export const getMenuItems = () => {
  const returnValue = [];

  const propertyItem = {};
  propertyItem.name = "Git Commits";
  propertyItem.component = componentNames.git_commits;
  propertyItem.icon = "ListAlt";
  propertyItem.active = true;
  propertyItem.children = [];
  returnValue.push(propertyItem);

  return returnValue;
};
