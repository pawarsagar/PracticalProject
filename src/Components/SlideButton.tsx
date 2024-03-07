import React, { FC, useMemo, useRef } from "react";
import { View, PanResponder, StyleSheet, Animated } from "react-native";

interface SliderProps {
  onPressClick: () => void;
}

const Slider: FC<SliderProps> = ({ onPressClick }) => {
  const squarePosition = useRef(new Animated.Value(0)).current;

  const onDragStopped = () => {
    onPressClick();
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          const newTranslateX = gestureState.moveX - 20;
          if (newTranslateX >= 0 && newTranslateX <= 260) {
            squarePosition.setValue(newTranslateX);
          }
        },
        onPanResponderRelease: (_evt, gestureState) => {
          if (gestureState.moveX >= 250) {
            onDragStopped();
          } else {
            Animated.spring(squarePosition, {
              toValue: 0,
              useNativeDriver: false,
            }).start();
          }
        },
      }),
    []
  );

  return (
    <View
      style={styles.container}
      {...panResponder.panHandlers}
      testID="slider-component"
    >
      <View style={[styles.rectangle]}>
        <Animated.View
          style={[
            styles.square,
            {
              transform: [{ translateX: squarePosition }],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle: {
    width: "100%",
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default Slider;
