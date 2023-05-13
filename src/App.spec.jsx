// describe('Jest', () => {
//     it('testing jest', () => {
//       expect(1 + 1).toBe(2);
//     });
//    });

//    describe("Example", () => {
//     it("Should return, when receiving a string, an object with information about it: number of characters, its first character and its last character", () => {
//       const text = "escola";
//       const result = stringInfo(text);
   
//       expect(result).toEqual({
//         numberOfCharacters: 6,
//         firstCharacter: "e",
//         lastCharacter: "a",
//       });
//     });
//    });

//    const stringInfo = (string) => {
//     const numberOfCharacters = string.length;
//     const firstCharacter = string[0];
//     const lastCharacter = string[numberOfCharacters - 1];
   
//     return {
//       numberOfCharacters,
//       firstCharacter,
//       lastCharacter,
//     };
//    };

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
 it("should display elements", () => {
   render(<App />);

   const title = screen.getByRole("heading", { name: /vite \+ react/i });
   expect(title).toBeInTheDocument();

   const reactLogo = screen.getByRole("img", { name: /react logo/i });
   expect(reactLogo).toBeInTheDocument();
 });
});

   
   
   