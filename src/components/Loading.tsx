const Loading = ({ size = 20 }) => {
  return (
    <img
      style={{ width: `${size}px` }}
      src="../../public/loading.gif"
      alt="Loading"
    />
  );
};

export default Loading;
