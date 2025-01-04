import { useContext } from "react";
import { FeedbacksContext } from "../../contexts/feedbacks";

export default function HashtagItem({ company }) {
  const { selectCompany } = useContext(FeedbacksContext);

  return (
    <li key={company}>
      <button onClick={() => selectCompany(company)}>#{company}</button>
    </li>
  );
}
