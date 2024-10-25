import toast from "react-hot-toast";

export const successNotify = (msg) => {
  toast.success(msg, {
    duration: 1000,
  });
};
