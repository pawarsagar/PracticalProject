import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { UserInputScreen } from "../../../src/Modules";
import store from "../../../src/Store/store";

describe("UserInputScreen", () => {
  const userProps = {
    changeUser: (useName) => {},
    navigation: {
      goBack: () => {},
    },
  };

  test("renders correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <UserInputScreen {...userProps} />
      </Provider>
    );

    expect(getByPlaceholderText("Enter UserName")).toBeTruthy();
    expect(getByText("Submit")).toBeTruthy();
  });

  test("submits user input", () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <UserInputScreen {...userProps} />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText("Enter UserName"), "NewUserName");
    fireEvent.press(getByText("Submit"));

    expect(store.getState()).toEqual({ userData: { userName: "NewUserName" } });
  });
});
