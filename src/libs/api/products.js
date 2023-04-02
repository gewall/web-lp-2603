import path from "path";
import { promises as fs } from "fs";

export const getProducts = async () => {
  const jsonDirectory = path.join(process.cwd(), "src/services");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/products.json",
    "utf8"
  );
  //Return the content of the data file in json format

  return JSON.parse(fileContents);
};
