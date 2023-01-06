import { atom, selector } from "recoil";

export const userSelctor = selector({
  key: "user",
  get: async () => {
    const response = await fetch("https://randomuser.me/api/");
    const { results } = await response.json();

    return results[0];
  },
});

export const userAtom = atom({
  key: "user2",
  default: {
    picture: { large: "" },
    name: { first: "", last: "" },
    email: "",
  },
  effects: [
    async ({ setSelf }) => {
      const response = await fetch("https://randomuser.me/api/");
      if (response != null) {
        const { results } = await response.json();
        setSelf(results[0]);
      }
      return () => {};
    },
  ],
});
