const InitialOffset = 64;

export const variants = {
  enterFromRight: {
    enter: { translateX: InitialOffset, opacity: 0 },
    visible: { translateX: 0, opacity: 1 },
  },
  enterFromLeft: {
    enter: { translateX: -InitialOffset, opacity: 0 },
    visible: { translateX: 0, opacity: 1 },
  },
  enterFromTop: {
    enter: { translateY: -InitialOffset, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  },
};
