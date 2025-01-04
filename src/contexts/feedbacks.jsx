import { createContext, useState, useEffect } from "react";

export const FeedbacksContext = createContext();

const URL =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

const FeedbacksProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  // idle | loading | success | error
  const [status, setStatus] = useState("idle");
  const isLoading = status === "loading";
  const errorMessage = false;

  const filteredFeedbacksByCompany =
    selectedCompany === ""
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.company === selectedCompany);

  const selectCompany = (newCompany) => {
    setSelectedCompany((prev) => (prev ? "" : newCompany));
  };

  const fetchFeedbacks = async () => {
    try {
      setStatus("loading");
      const response = await fetch(URL, { method: "GET" });
      const data = await response.json();
      const companyList = data.feedbacks.map((feedback) => feedback.company);

      setFeedbacks(data.feedbacks);
      setCompanyList(companyList);

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const addFeedback = async (newFeedback) => {
    await fetch(URL, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        text: newFeedback,
        upvoteCount: 0,
        daysAgo: 0,
        company: "MyCompany",
        badgeLetter: "M",
      }),
    });

    fetchFeedbacks();
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <FeedbacksContext.Provider
      value={{
        feedbacks: filteredFeedbacksByCompany,
        companyList,
        isLoading,
        selectCompany,
        addFeedback,
      }}
    >
      {children}
    </FeedbacksContext.Provider>
  );
};

export default FeedbacksProvider;
