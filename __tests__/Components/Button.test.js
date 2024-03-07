/**
 * @format
 */

import React from "react";
import "react-native";
import ButtonComponent from "../../src/Components/Buttons";
import { fireEvent, render } from "@testing-library/react-native";

describe("Button", () => {
  test("renders correctly with default props", () => {
    const { getByText } = render(<ButtonComponent title="Press Me" />);
    const button = getByText("Press Me");
    expect(button).toBeTruthy();
  });

  test("renders correctly with custom title", () => {
    const { getByText } = render(<ButtonComponent title="Custom Title" />);
    const button = getByText("Custom Title");
    expect(button).toBeTruthy();
  });

  test("calls onPress handler when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonComponent title="Press Me" onPress={onPressMock} />
    );
    const button = getByText("Press Me");
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
