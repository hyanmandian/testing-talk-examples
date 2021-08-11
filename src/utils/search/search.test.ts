import { search } from ".";

describe("Utils > Search", () => {
  // it("Deve retornar uma exceção quando não passar `data`", () => {
  //   // @ts-ignore
  //   expect(() => search()).toThrow("É obrigatório passar um array de dados.");
  // });

  // it("Deve retornar uma exceção quando não passar `str`", () => {
  //   // @ts-ignore
  //   expect(() => search([])).toThrow(
  //     "É obrigatório passar o texto a ser buscado."
  //   );
  // });

  it("Deve retornar dados", () => {
    const data = [{ name: "João" }, { name: "José" }];

    expect(search(data, "Jo")).toMatchObject([
      { name: "João" },
      { name: "José" },
    ]);

    expect(search(data, "João")).toMatchObject([{ name: "João" }]);

    expect(search(data, "José")).toMatchObject([{ name: "José" }]);
  });

  it("Deve retornar um array vazio", () => {
    // const data = [{ name: "João", events: [], }, { name: "José", events: [], }];
    const data = [{ name: "João" }, { name: "José" }];

    expect(search(data, "Bruno")).toMatchObject([]);
  });
});
