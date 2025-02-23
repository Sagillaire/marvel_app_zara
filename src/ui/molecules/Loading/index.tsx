const Loading = ({ size = 20 }) => {
  return (
    <img
    data-testid="loading"
      style={{ width: `${size}px` }}
      src="/assets/loading.gif"
      alt="Loading"
    />
  );
};

export default Loading;
