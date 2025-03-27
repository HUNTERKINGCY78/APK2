function sendReport() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (!phoneNumber) {
        alert('Silakan masukkan nomor telepon.');
        return;
    }

    // Show loading animation
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    // Simulate loading
    setTimeout(() => {
        // Hide loading animation
        document.getElementById('loading').classList.add('hidden');

        // Show result
        document.getElementById('result').classList.remove('hidden');

        // Simulate email sending and response
        const resultText = `
        {
            "status": true,
            "rents": 4385419724522-1124,
            "Frontless": true,
            "extendedTextMessage": {
                "messageTimestamp": "1675312642",
                "status": "SUCCESS",
                "participant": "+62 813-1665-1145sapp.net"
            },
            "Results": {
                "Data": {
                    "payload": true,
                    "domops": 'replace',
                    "contactForContentAres": false,
                    "harp": {
                        "Phip": {
                            "consistency": (Object),
                            "rarch": (3),
                            "Lid": 7183676454545099525
                        },
                        "allResources": "SacdiLI"
                    },
                    "Parans": URLSearchParams {
                        "Jarnest": '2931',
                        "step": 'submit',
                        "country_selector": 'ID',
                        "phone_number": "${phoneNumber}",
                        "email": "CENSORED",
                        "email_confirm": "CENSORED",
                        "platform": "ANDROID",
                        "your_message": "CENSORED",
                        "_user": "0",
                        "19316.P": "whatsapp_mg.2.0.0.0.0",
                        "dpr": "1",
                        "_rev": 1006630858
                    }
                }
            },
            "extendedTextMessage": {
                "text": "ban ${phoneNumber}",
                "messageTimestamp": "1675312682",
                "status": "SUCCESS",
                "participant": "${phoneNumber}:50s.whatsapp.net"
            },
            "Results": {
                "Data": {
                    "ar": 1,
                    "payload": true,
                    "domops": "hsrp",
                    "harp": {
                        "Phip": {
                            "consistency": [Object],
                            "rsrcMap": [Object]
                        }
                    },
                    "allResources": "Eer",
                    "SecdiLI": "Lid: 7183676494845099535",
                    "Parans": URLSearchParams {
                        "Jazoest": '2931',
                        "Isd": 'AVrc-Gq5jtu',
                        "step": 'submit',
                        "country_selector": 'ID',
                        "phone_number": "${phoneNumber}",
                        "email": "CENSORED",
                        "email_confirm": "CENSORED",
                        "platform": "ANDROID",
                        "your_message": "CENSORED",
                        "_user": "0",
                        "19316.P": "whatsapp_mg.2.0.0.0.0",
                        "dpr": "1",
                        "_rev": 1006630858
                    }
                }
            }
        }
        `;

        document.getElementById('resultText').textContent = resultText;
    }, 3000); // Simulate a 3-second delay
}
