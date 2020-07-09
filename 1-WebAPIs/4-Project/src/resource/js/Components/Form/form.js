export default function Form({ classname }) {
  return `
  <div class="${classname}">
    <form>
      <input type="text" />
      <button>등록</button>
    </form>
  </div>
`;
}
