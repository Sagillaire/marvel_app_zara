const GeneralLoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000e3",
        width: "100vw",
        height: "calc(100% - 90px)",
      }}
    >
      <img src="/assets/mvst.gif" alt="General Loading" />
    </div>
  );
};

export default GeneralLoadingScreen;
