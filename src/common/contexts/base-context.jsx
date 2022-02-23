export const executeApi = async (
  apiFunction,
  request,
  showLoading,
  addMessage
) => {
  try {
    if (showLoading) showLoading(true);

    const response = await (request ? apiFunction(request) : apiFunction());
    const { data, error } = response;
    handleError(
      error,
      addMessage,
      error?.response?.data?.responseStatus
        ? error.response.data.responseStatus
        : data?.responseStatusCode
    );

    if (showLoading) showLoading(false);

    return data;
  } catch (ex) {
    if (showLoading) showLoading(false);
    console.error("Api Call Exception", ex);
  }
};

const handleError = (error, addMessage, responseStatusCode) => {
  if (addMessage) {
    if (error && responseStatusCode) {
      addMessage({
        message: responseStatusCode,
      });
    } else if (error && error.message) {
      addMessage({ message: error.message });
    }
  }
};
