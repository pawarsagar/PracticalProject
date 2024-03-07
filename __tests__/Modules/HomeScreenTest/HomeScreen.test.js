import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { HomeScreen } from "../../../src/Modules";
import { Provider } from "react-redux";
import store from "../../../src/Store/store";

describe("HomeScreen", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen navigation={{ navigate: () => {} }} />
      </Provider>
    );

    // Assert that the component renders some expected text
    expect(getByText("Update Username")).toBeTruthy();
    expect(getByText("Check Simulator/Emulator status")).toBeTruthy();
    expect(getByText("Alert Button")).toBeTruthy();
  });

  test("navigates on button press", () => {
    const navigateMock = jest.fn(); // Mocking navigation function
    const { getByText } = render(
      <Provider store={store}>
        <HomeScreen navigation={{ navigate: navigateMock }} />
      </Provider>
    );

    fireEvent.press(getByText("Update Username"));
    fireEvent.press(getByText("Check Simulator/Emulator status"));
    fireEvent.press(getByText("Alert Button"));

    expect(navigateMock).toHaveBeenCalledWith("UserInputScreen");
    expect(navigateMock).toHaveBeenCalledWith("CheckNativeCallbackScreen");
  });
});
