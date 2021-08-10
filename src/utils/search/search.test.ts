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

    expect(search(data, "Jo")).toMatchObject(data);
    expect(search(data, "João")).toMatchObject([data[0]]);
    expect(search(data, "José")).toMatchObject([data[1]]);
  });

  it("Deve retornar um array vazio", () => {
    const data = [{ name: "João" }, { name: "José" }];
    // const data = [{ name: "João", events: [], }, { name: "José", events: [], }];

    expect(search(data, "Bruno")).toMatchObject([]);
  });
});
