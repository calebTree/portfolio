$(document).ready(function() {
    'use strict';

    const plainAlpha = "abcdefghijklmnopqrstuvwxyz";

    $('#cipherBtn').click(function() {
        let key = document.getElementById('key').value;
        if (!key) { key = 0 };
        key = parseInt(key, 10);
        let message = document.getElementById('message').value;

        if ($('#decrypt').is(":checked")) {
        //   alert('checked');
          decrypt(key, message);
        } else {
        //   alert('not checked');
          encrypt(key, message);
        }
    })

    function encrypt(key, message) {
        // console.log('encrypt');
        let cipherAlpha = cipherAlphabet(key);
        document.getElementById('cipherAlpha').innerHTML = cipherAlpha;
        document.getElementById('plainText').innerHTML = message;
        document.getElementById('cipherText').innerHTML = cipherMessage(cipherAlpha, message);
    }

    function decrypt(key, message) {
        // console.log('decrypt');
        document.getElementById('cipherAlpha').innerHTML = cipherAlphabet(key);
        document.getElementById('plainText').innerHTML = decipherMessage(message, key);
        document.getElementById('cipherText').innerHTML = message;
    }

    function cipherAlphabet(key) {
        let cipherAlpha = '';
        let p = 0; // wrap around variable
        for (let i = 0; i < plainAlpha.length; i++) {
            if (i + key >= plainAlpha.length) { // wrap around when i + key >= 26
                cipherAlpha += plainAlpha.charAt(p); // shift cipherAlpha
                p++;
            } else {
                cipherAlpha += plainAlpha.charAt(i + key); // shift cipherAlpha
            }
        }
        if (key == 0) {
            document.getElementById('key').value = '0';
        }
        return cipherAlpha;
    }

    function cipherMessage(cipherAlpha, message) {
        let cipherText = message.split('');
        for (let i = 0; i < plainAlpha.length; i++) { // loop over all letters in the alphabet
            for (let j = 0; j < message.length; j++) { // loop over all letters in the message
                if (plainAlpha.charCodeAt(i) == message.charCodeAt(j)) {
                    cipherText[j] = cipherAlpha[i]; // replace each plainAlpha letter in the message with the cipherAlpha letter
                }
            }
        }
        return cipherText.join('');
    }

    function decipherMessage(cipherText, key) {
        let plainText = cipherText.split(''); // plainText same size as cipherText
        let cipherAlpha = cipherAlphabet(key); // generate cipherAlphabet
        for (let i = 0; i < cipherAlpha.length; i++) { // loop over all letters in alphabet
            for (let j = 0; j < cipherText.length; j++) { // loop over all letters in the cipherText
                if (cipherAlpha.charAt(i) == cipherText.charAt(j)) {
                    plainText[j] = plainAlpha.charAt(i); // replace each cipherAlpha letter in the message with the plainAlpha letter
                }
            }
        }
        return plainText.join('');
    }
});
