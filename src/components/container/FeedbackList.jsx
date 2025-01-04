import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "./ErrorMessage";
import { useContext } from "react";
import { FeedbacksContext } from "../../contexts/feedbacks";

export default function FeedbackList() {
  const context = useContext(FeedbacksContext);
  const { feedbacks, isLoading } = context;

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {/* {errorMessage && <ErrorMessage message={errorMessage} />} */}

      {feedbacks.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
