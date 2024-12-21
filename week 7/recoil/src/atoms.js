import axios from "axios";
import { atom, selector } from "recoil";

export const notificationCount = atom({
  key: "notification",
  default: selector({
    key: "backCall",
    get: async () => {
      const res = await axios.get("http://localhost:3000");
      return res.data;
    },
  }),
});



export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationCount);

    return (
      (allNotifications.networks || 0) +
      (allNotifications.jobs || 0) +
      (allNotifications.notifications || 0) +
      (allNotifications.messagings || 0)
    );
  }, 
});
