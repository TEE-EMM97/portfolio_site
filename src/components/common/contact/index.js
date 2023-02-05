import React from "react";

const emails = ["tevmcc@gmail.com", "mail@gmail.com"];

export const Mail = ({ email, subject, body, children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  const checkEmail = emails.includes(email) ? email : emails[0];

  return <a href={`mailto:${checkEmail}${params}`}>{children}</a>;
};
