import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Posts } from ".";

describe("Posts", () => {
  it("Deve filrar os dados", async () => {
    render(<Posts />);

    const loaderEl = screen.getByTestId("loader");

    expect(loaderEl).toBeInTheDocument();

    await waitFor(() => {
      expect(loaderEl).not.toBeInTheDocument();
    });

    expect(screen.getByTestId("posts")).toBeInTheDocument();

    userEvent.type(screen.getByRole("textbox", { name: "search" }), "A");
  });
});
