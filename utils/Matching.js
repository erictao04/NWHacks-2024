import { ref as databaseRef, get } from "firebase/database";
import { db } from "../config";
import { OpenAI } from 'openai';

const OPEN_AI_API_KEY = process.env.EXPO_PUBLIC_OPEN_AI_API_KEY;

const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

async function match(userEmail) {
    const postListRef = databaseRef(db, "sellerClothes");
    const snapshot = await get(postListRef).then((snapshot) => {
      return snapshot.val();
    });
    const arr = [];
    for (let key in snapshot) {
        if (snapshot[key]["email"] !== userEmail) {
          let innerObj = snapshot[key];
          let desc = innerObj["imageDescription"];
          arr.push(`Key: ${key}, Description: ${desc}`)
          console.log(`Key: ${key}, Description: ${desc}`);
        }
    }
    const username = userEmail.slice(0, userEmail.indexOf("@"));
    const buyerPreferencesRef = databaseRef(db, "buyerPreferences/" + username);
    const buyerSnapshot = await get(buyerPreferencesRef).then((snapshot) => {
      return snapshot.val();
    });
    console.log(buyerSnapshot)
    const userDescription = buyerSnapshot["preferences"];
    console.log(userDescription)
    if (userDescription === undefined) {
      console.log("No preferences found for this user");
      const keys = Object.keys(snapshot).slice(0, 6);
      console.log(keys);
      return "No preferences found for this user";
    }
    const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: `In this list: ${arr.toString()}, return the keys of the top 6 descriptions that match the best with the following description. Just list the keys, separated by commas.`},
              { type: "text",
                text: userDescription },
            ],
          },
        ],
        max_tokens: 100,
      });
    const output = response.choices[0].message.content;
    console.log(output);

    return output;
};

export default match;