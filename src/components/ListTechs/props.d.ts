import { TecsType } from "../../types/commom";

export interface PropsType {
  list: TecsType[];
  callbackUpdateTec: Function;
  callbackDeleteTec: Function;
}
