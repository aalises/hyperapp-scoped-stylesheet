const { h, app} = require("hyperapp")
const { stylesheet } = require("../dist/hyperapp-scoped-stylesheet.umd")

const style = `
  span { color: red }
`

describe("Test several rules regarding stylesheet rendering", () => {

  beforeEach(() => {
    document.body.innerHTML = ""
  });

  it("should render a functional view", done => {
   
    const view = () => (
      <div oncreate={() => {
        expect(document.body.innerHTML).toContain("span { color: red }");
        expect(document.body.innerHTML).toContain(`style scoped`);
        done()
      }}>
        <span> Text to be styled</span>
      </div>
    )

    app(null, null, stylesheet(style, view), document.body);
  })
})
