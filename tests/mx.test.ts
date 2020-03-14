import { lookup } from "../src/mx";

describe("MX", () => {
  test("Can lookup mx records", done => {
    lookup("github.com")
      .then(records => {
        expect(records).not.toBeNull();
        done();
      })
      .catch(err => done(err));
  });
  test("Fail lookup mx on not found domain", done => {
    lookup("github.notfound").catch(_ => done());
  });
});
