const tabContainer = {
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
};

const tabStyle = {
  active: {
    container: { ...tabContainer, backgroundColor: "#226f54" },
    text: {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "capitalize",
      spacing: 0,
      letterSpacing: 0,
    },
  },
  inactive: {
    container: { ...tabContainer, backgroundColor: "#EBEBEB" },
    text: {
      color: "#226F54",
      fontWeight: "bold",
      textTransform: "capitalize",
      spacing: 0,
      letterSpacing: 0,
    },
  },
};

const exitButton = {
  container: {
    width: 180,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    spacing: 0,
    letterSpacing: 0,
  },
};

export { tabStyle, exitButton };
