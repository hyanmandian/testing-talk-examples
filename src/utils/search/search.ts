export function search<T>(data: Array<T>, str: string) {
  if (data === undefined) {
    throw new Error("É obrigatório passar um array de dados.");
  }

  if (str === undefined) {
    throw new Error("É obrigatório passar o texto a ser buscado.");
  }

  return data.filter((item) => {
    return Object.keys(item).some((key) => {
      const value = (item as any)[key];

      if (typeof value !== "string") {
        return false;
      }

      return value.includes(str);
    });
  });
}
