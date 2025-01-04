import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const companyList = [
    "Starbucks",
    "Netflix",
    "McDonald's",
    "Amazon",
    "Microsoft",
    "Nike",
    "Adidas",
  ];

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  );
}
