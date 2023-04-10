const openAIKey = "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";

export const generateTitle = async () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(openAIKey),
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Gnerate intriguing airbnb property title 50 characters max for luxury home near beach, private pool, sleeps 14+ ",
        },
      ],
      temperature: 0.1,
      max_tokens: 2000,
    }),
  };

  try {
    return await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data.choices[0].message.content);
  } catch (err) {
    console.log(err);
  }
};

export const generateDescription = async () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(openAIKey),
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Write a property listing description for an Airbnb 500 character max about a 3 bedroom 2.5 bathroom 6 beds sleeping 12 guest just 30 minutes away from Zion National park",
        },
      ],
      temperature: 0.1,
      max_tokens: 2000,
    }),
  };

  try {
    return await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data.choices[0].message.content);
  } catch (err) {
    console.log(err);
  }
};

export const generateSpace = async () => {
  const prompt =
    "write a space description for an airbnb in Hurricane, UT describe their listing in greater detail, including room-by-room descriptions, details about amenities. [then write short details about amenities and rooms for example] Amenities include 30 minutes away from Zion national park, huge resort pool with lazy river and hot tub heated year round. first floor has fully equipped kitchen with stainless steel appliances, large living room with hanging boho swings, half bath. Second floor Master suite with en-suite bathroom, second floor bedroom with 2 queen size beds, second floor bedroom with 2 sets of triple full bunk beds, second floor full bathroom. the whole home has a boho style ";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(openAIKey),
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      temperature: 0.1,
      max_tokens: 2000,
    }),
  };
  try {
    return await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => data.choices[0].message.content);
  } catch (err) {
    console.log(err);
  }
};
