import visitedPages from "./visitedPages";

test("Test to see visitedPages.addPage() sets localStorage to the param value", () => {
  let param = "Hello";
  visitedPages.addPage(param);
  expect(localStorage.getItem(param)).toBeDefined();
});

test("Test to see visitedPage.checkPage() returns true if param exists", () => {
  let param = "Hello";
  visitedPages.addPage(param);
  expect(visitedPages.checkPage(param)).toBe(true);
});

test("Test to see visitedPage.checkPage() returns false if there is no test string", () => {
  let param = "Hello";
  visitedPages.addPage(param);
  expect(visitedPages.checkPage("test")).toBe(false);
});
