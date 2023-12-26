import type { ApiWorkWork } from "strapi/types/generated/contentTypes";
export default interface Work extends Pick<ApiWorkWork, "attributes"> {
  id: number;
}
