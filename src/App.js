import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import PastMeetingEventspage from "./components/PastMeetingEventspage";


Run();
function App() {
  return <PastMeetingEventspage/>;
}

export default App;
