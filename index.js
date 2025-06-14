import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SIGNERS = [
  {
    uuid: process.env.SIGNER_UUID,
    secret: process.env.SIGNER_SECRET
  }
];

const API_URL = "https://api.neynar.com/v2/farcaster/cast";

async function postCast(signer, text) {
  try {
    const response = await axios.post(
      API_URL,
      {
        signer_uuid: signer.uuid,
        text: text,
        channel_id: "farcaster"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "api_key": process.env.NEYNAR_API_KEY
        }
      }
    );
    console.log("✅ Cast sent:", response.data.cast.hash);
  } catch (error) {
    console.error("❌ Error sending cast:", error.response?.data || error.message);
  }
}

async function run() {
  const randomText = "Hello from auto-poster bot! 🤖 #farcaster";
  for (const signer of SIGNERS) {
    await postCast(signer, randomText);
  }
}

run();