
const { phone } = require('phone');
export async function createBrevoContact(contactInfo) {
    let myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("api-key", process.env.BREVO_API_KEY);
    myHeaders.append("content-type", "application/json");

    let raw = JSON.stringify({
        "attributes": {
            "FIRSTNAME": contactInfo?.firstName,
            "LASTNAME": contactInfo?.lastName,
            "SERVICE": contactInfo?.service,
            "NOTES": contactInfo?.message,
            "SMS": phone(contactInfo?.phone, "USA").phoneNumber,
        },
        "updateEnabled": true,
        "listIds": [8],
        "email": contactInfo?.email,
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch("https://api.brevo.com/v3/contacts", requestOptions)
    return res.status
}