import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test(`find heading element`, () => {
  render(<Greet />);
  const getHeading = screen.getByText(/greet/i);
  expect(getHeading).toBeInTheDocument();
});

test.skip(`greet renders a name`, () => {
  render(<Greet name="muneeb" />);
  const textElement = screen.getByText(/greeting muneeb/i);
  expect(textElement).toBeInTheDocument();
});
