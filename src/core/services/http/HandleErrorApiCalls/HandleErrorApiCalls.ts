import * as HttpStatus from "http-status-codes";

import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { routes } from "../../../../routing/routes.schema";
import { HandleErrorApiCallsType } from "./HandleErrorApiCalls.types";

export const handleErrorApiCalls: HandleErrorApiCallsType = (error) => {
  const ERROR_MESSAGE = "Something went wrong";
  const errorCode =
    error.response?.status ?? HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR;

  const errorObject = {
    message: ERROR_MESSAGE,
    code: errorCode,
    raw: error?.response,
  };

  switch (errorCode) {
    case HttpStatus.StatusCodes.UNAUTHORIZED:
    case HttpStatus.StatusCodes.FORBIDDEN:
    case HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR:
    case HttpStatus.StatusCodes.NOT_FOUND:
    case HttpStatus.StatusCodes.EXPECTATION_FAILED:
    case HttpStatus.StatusCodes.NOT_ACCEPTABLE:
      toast(ERROR_MESSAGE);
      redirect(routes.BASE_NAME);
      break;
    default:
      toast(ERROR_MESSAGE);
      redirect(routes.BASE_NAME);
      break;
  }
  console.error(errorObject);
};
