import React from "react";
import { render } from "@testing-library/react-native";
import { CheckNativeCallbackScreen } from "../../../src/Modules";
import { Provider } from "react-redux";
import store from "../../../src/Store/store";
import { strings } from "../../../src/Constants";

describe("<CheckNativeCallbackScreen />", () => {
  it("renders correctly with user name and virtual device status", () => {
    // const store = createMockStore();
    const isVirtualDevice = true;
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <CheckNativeCallbackScreen route={{ params: { isVirtualDevice } }} />
      </Provider>
    );

    const screenComponent = getByTestId("CheckNativeCallbackScreen");
    expect(screenComponent).toBeTruthy();

    const virtualDeviceText = getByText(
      `${strings.virtualDevice}:-  ${isVirtualDevice}`
    );
    expect(virtualDeviceText).toBeTruthy();
  });
});
