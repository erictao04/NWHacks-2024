import { OpenAI } from 'openai';

const OPEN_AI_API_KEY = process.env.EXPO_PUBLIC_OPEN_AI_API_KEY;

const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

async function parseImage(image_url) {
    const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What type of clothing is this? Then, use 5 words to describe the style of this piece of clothing. Answer in one line, with all words separated by commas." },
            //   { type: "text", text: "Describe this piece of clothing in these aspects: Silhouette and Cut, Color and Pattern, Fabric and Texture, Details and Embellishments, Fit and Proportion. Use 1 word to describe each aspect, except for Color and Pattern, where you use 2 words." },
              {
                type: "image_url",
                image_url: image_url,
              },
            ],
          },
        ],
        max_tokens: 100,
      });
    const output = response.choices[0].message.content;
    console.log(output);

    return output;
};

export default parseImage;

