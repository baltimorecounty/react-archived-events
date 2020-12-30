import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import PastMeetingEventsPage from "./components/PastMeetingEventsPage";

Run();
function App() {
  return <PastMeetingEventsPage />;
}

export default App;
