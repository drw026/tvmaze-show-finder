export const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const timer = () => {
  let timeStamp: DOMHighResTimeStamp = 0;
  return {
    start() {
      timeStamp = new Date().getTime();
    },
    stop() {
      const stopTimeStamp = new Date().getTime();
      return stopTimeStamp - timeStamp;
    },
  };
};
