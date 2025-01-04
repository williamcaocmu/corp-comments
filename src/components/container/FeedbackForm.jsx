import { useContext, useState } from "react";
import { FeedbacksContext } from "../../contexts/feedbacks";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const { addFeedback } = useContext(FeedbacksContext);
  // formStatus: idle | valid | invalid
  const [formStatus, setFormStatus] = useState("idle");

  const checkValidFormClassName = () => {
    if (formStatus === "idle") return "";
    if (formStatus === "valid") return "form--valid";
    if (formStatus === "invalid") return "form--invalid";
  };

  const checkValidFeedback = () => {
    return text.includes("#");
  };

  const timeout = () => {
    setTimeout(() => {
      setFormStatus("idle");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = checkValidFeedback();
    if (!isValid) {
      setFormStatus("invalid");
      timeout();
      return;
    }
    setFormStatus("valid");
    addFeedback(text);
    setText("");
    timeout();
  };

  return (
    <form
      className={`form ${checkValidFormClassName()}`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{150}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
