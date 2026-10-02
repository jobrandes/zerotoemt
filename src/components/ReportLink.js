import React from "react";

const REPORT_EMAIL = "jobrandes+zerotoemt@gmail.com";

// "Report a problem" link. Opens the learner's own email app, prefilled with
// where they were. No backend, no stored data.
export default function ReportLink({ where, question }) {
  const subject = "Zero to EMT: possible problem - " + where;
  const body = "Where: " + where + "\n" +
    (question ? "Question: " + question + "\n" : "") +
    "\nWhat looks wrong (clinical error, typo, confusing, broken)?\n\n";
  const href = "mailto:" + REPORT_EMAIL + "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
  return (
    <a className="zte-report-link" href={href}>Report a problem with this question</a>
  );
}
