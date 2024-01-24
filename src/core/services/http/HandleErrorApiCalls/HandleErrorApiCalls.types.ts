import { AxiosError } from "axios";
import { ServerError } from "../RequestService/RequestService.types";

export type HandleErrorApiCallsType = (error: AxiosError<ServerError>) => void;
