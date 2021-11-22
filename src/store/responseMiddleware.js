import { toast } from "react-toastify";

const responseMiddleware = () => (next) => (action) => {
  const { meta = {}, error } = action;
  const { arg = {}, requestStatus } = meta;
  const { skipErrorHandling, errorMessage, successMessage } = arg;

  if (error && !skipErrorHandling) {
    if (errorMessage) {
      toast.error(errorMessage);
    } else {
      toast.error(error?.message);
    }
  }

  if (requestStatus === "fulfilled" && successMessage) {
    toast.success(successMessage);
  }

  return next(action);
};

export default responseMiddleware;
