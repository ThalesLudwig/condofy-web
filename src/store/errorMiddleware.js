import { toast } from "react-toastify";

const errorMiddleware = () => (next) => (action) => {
  const { meta = {}, error } = action;
  const { skipErrorHandling } = meta;

  if (error && !skipErrorHandling) {
    toast.error(error?.message);
  }

  return next(action);
};

export default errorMiddleware;
