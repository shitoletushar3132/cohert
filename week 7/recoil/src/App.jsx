import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notificationCount, totalNotificationSelector } from "./atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [allNotifications, setAllNotifications] =
    useRecoilState(notificationCount);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {allNotifications.networks >= 100 ? "99+" : allNotifications.networks})
      </button>
      <button>Jobs ({allNotifications.jobs})</button>
      <button>Messaging ({allNotifications.messagings})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
