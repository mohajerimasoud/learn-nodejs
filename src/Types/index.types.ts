export interface IResponseCode<T> {
  code: number;
  message: "Success" | "Not Found" | any;
  content?: T | string;
}
