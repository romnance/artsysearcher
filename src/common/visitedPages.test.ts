import visitedPages from "./visitedPages";

test("Test to see visitedPages.addPage() sets localStorage to the param value", () => {
  let param = "Hello";
  visitedPages.addPage(param);
  expect(localStorage.getItem(param)).toBeDefined();
});
