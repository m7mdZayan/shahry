import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

test("showing add review modal", async () => {
  render(<App />);

  // Find the button by its role
  const button = screen.getByRole("button", { name: /add a review/i });

  // Click the button
  fireEvent.click(button);

  expect(await screen.findByText("add review")).toBeVisible();
  const dialog = screen.getByRole("dialog");
  fireEvent.keyDown(dialog, { keyCode: "27" });
  expect(await screen.findByText("add review")).not.toBeVisible();
});
