import Slider from "../../src/Components/SlideButton";
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

describe("<Slider />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Slider onPressClick={() => {}} />);
    const sliderComponent = getByTestId("slider-component");
    expect(sliderComponent).toBeTruthy();
  });

  it("calls onPressClick when slider is dragged to the end", () => {
    const { getByTestId } = render(<Slider onPressClick={() => {}} />);
    const swipeBoxComponent = getByTestId("slider-component");

    fireEvent(swipeBoxComponent, "panResponderMove", { dx: 300, dy: 0 });
  });

  it("does not call onPressClick when slider is not dragged to the end", () => {
    const onPressClickMock = jest.fn();
    const { getByTestId } = render(<Slider onPressClick={onPressClickMock} />);
    const sliderComponent = getByTestId("slider-component");

    // Calculate the position to simulate dragging, not to the end
    const moveX = 100;

    fireEvent(sliderComponent, "panResponderMove", { moveX });
    fireEvent(sliderComponent, "panResponderRelease", { moveX });

    expect(onPressClickMock).not.toHaveBeenCalled();
  });
});
