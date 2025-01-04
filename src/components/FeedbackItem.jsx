import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackItem({ feedbackItem }) {
  return (
    <li className={`feedback ${true ? "feedback--expand" : ""}`}>
      <button>
        <TriangleUpIcon />
        <span>{"upvote"}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
