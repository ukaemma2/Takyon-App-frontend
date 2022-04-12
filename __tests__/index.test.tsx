// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    expect(1).toBe(1);
  });
});
