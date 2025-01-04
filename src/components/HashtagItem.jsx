export default function HashtagItem({ company }) {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
}
