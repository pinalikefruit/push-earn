const PushAPI = require("@pushprotocol/restapi");

const fetchNotification = async() => {
    const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:5:0x4317c44fD3143D8AC5723865CF046238A2cd8FD3', // user address in CAIP
        env: 'prod',
        limit:10
      });
    console.log("Notification", notifications)
}

fetchNotification();