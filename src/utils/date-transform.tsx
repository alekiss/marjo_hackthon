export const dateTransform = (dataString: string) => {
  if (dataString && typeof dataString === "string") {
    const date = dataString.split("-");
    const day = date[2];
    const month = date[1];
    const year = date[0];
    const dataFormatada = `${day}/${month}/${year}`;
    return dataFormatada;
  }
  return "";
};