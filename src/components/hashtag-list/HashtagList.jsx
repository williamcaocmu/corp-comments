import { useContext } from "react";
import HashtagItem from "./HashtagItem";
import { FeedbacksContext } from "../../contexts/feedbacks";

export default function HashtagList() {
  const { companyList } = useContext(FeedbacksContext);

  return (
    <ul className="hashtags">
      {companyList.map((company, i) => (
        <HashtagItem key={i} company={company} />
      ))}
    </ul>
  );
}
