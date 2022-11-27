import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });
    expect(getByText(/Artsysearcher/i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Nothing to see here!/i)).toBeInTheDocument();
  });
});
