import { nanoid } from "nanoid";
import { Option } from "../data/data";

export function createOptions(options: Omit<Option, "id">[]) {
  const new_options: Option[] = [];

  for (const item of options) {
    for (let i = 0; i <8; i += 1) {
      new_options.push({ ...item, id: nanoid() });
    }
  }
  return new_options;
}

export function mixCards(options: Option[]) {
  return [...options].sort(() => Math.random() - 0.5);
}
