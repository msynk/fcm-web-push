var firebaseConfig = {
    apiKey: "AIzaSyBZbUv9ODxBBnqfmX-mfgfpXLumkrbIcRE",
    authDomain: "order-server-hq.firebaseapp.com",
    projectId: "order-server-hq",
    storageBucket: "order-server-hq.appspot.com",
    messagingSenderId: "447391958873",
    appId: "1:447391958873:web:7b51db2ed1678a76a9ae48",
    measurementId: "G-P03CP6L6HB"
};

var app = firebase.initializeApp(firebaseConfig);
var messaging = firebase.messaging();

Notification.requestPermission(result => {
    console.log('notification permission:', result);
});

messaging.onMessage(message => {
    console.log('recieved forground message:', message)

    // new Notification(message.notification.title, {
    //     body: message.notification.body,
    // })
}, error => {
    console.error(error)
})

function getToken() {
    messaging.getToken({ vapidKey: 'BF_dD4QexT-eNZBwS5JnYG3v7u8XlrH6IBn3nOZRE66TTRSbKhXu65zwQgL7sW3OTrdku7z8hRIRV_GimSnE8Vk' }).then(token => {
        console.log('token:', token);
    }, error => {
        console.error(error)
    });
}