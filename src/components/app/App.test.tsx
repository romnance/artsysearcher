import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });
    expect(getByText(/Artsysearcher/i)).toBeInTheDocument();
  });
});
