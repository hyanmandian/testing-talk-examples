import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { Posts } from ".";

const MOCK_DATA = [
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
    return res(ctx.json(MOCK_DATA));
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
    
    const postsEl = screen.getByTestId("posts");

    expect(postsEl).toHaveTextContent(/Jaw-Dropping Jupiter/);
    expect(postsEl).toHaveTextContent(/ACS3, NASA’s Advanced Composite Solar Sail System/);

    userEvent.type(screen.getByRole("searchbox"), "ACS3");

    expect(postsEl).not.toHaveTextContent(/Jaw-Dropping Jupiter/);
    expect(postsEl).toHaveTextContent(/ACS3, NASA’s Advanced Composite Solar Sail System/);
  });
});
