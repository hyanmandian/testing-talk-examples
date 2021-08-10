import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { Posts } from ".";

const data = [
  {
    title: "Jaw-Dropping Jupiter",
    summary:
      "10 years after launching, Juno is still showing us Jupiter’s stunning beauty.",
    events: [],
  },
  {
    title: "ACS3, NASA’s Advanced Composite Solar Sail System",
    summary:
      "ACS3 will test sail boom materials that could enable much larger solar sail missions.",
    events: [],
  },
];

const server = setupServer(
  rest.get("https://api.spaceflightnewsapi.net/v3/blogs", (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

describe("Posts", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("Deve filrar os dados", async () => {
    render(<Posts />);

    const loaderEl = screen.getByTestId("loader");

    expect(loaderEl).toBeInTheDocument();

    await waitFor(() => {
      expect(loaderEl).not.toBeInTheDocument();
    });

    expect(screen.getByTestId("posts")).toBeInTheDocument();

    userEvent.type(screen.getByRole("searchbox"), "A");
  });
});
