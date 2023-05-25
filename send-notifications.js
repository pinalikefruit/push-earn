const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");
require("dotenv").config();

const PK = process.env.PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `Win with Push Missions`,
        body: `See the #1 mission`
      },
      payload: {
        title: `🇮🇳 Win with Push Missions`,
        body: `Integration of translation framework in Push website and dApp in Spanish language`,
        cta: 'https://pushprotocol.notion.site/Push-Missions-693291d804cf4b2180a992dd40fc5a0e?p=3d5c3e7f9cb24108ac9d235fb0a6070f&pm=s',
        img: ''
      },
      channel: 'eip155:5:0x55BD7E92250903186CEb3938c70F103654a38De1', // Push Earn Channel
      env: 'prod'
    });
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();