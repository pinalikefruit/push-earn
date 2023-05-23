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
        title: `Welcome`,
        body: `This is my first notification`
      },
      payload: {
        title: `first notification`,
        body: `This working`,
        cta: 'https://staging.push.org/send',
        img: ''
      },
      channel: 'eip155:5:0x55BD7E92250903186CEb3938c70F103654a38De1', // your channel address
      env: 'staging'
    });
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();