import { TecsType } from "../../types/commom";

export interface PropsType {
  list: TecsType[];
  tecsTotal: number,
  tecsComplete: number,
  callbackUpdateTec: Function;
  callbackDeleteTec: Function;
}
