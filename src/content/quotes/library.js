export const quotes = {
  leadership: [
    "Leadership isn't about having a title. It's about having a heart that cares.",
    "I didn't come to politics. I came to serve. There's a difference.",
    "A true leader doesn't just lead from the front. They listen from every direction.",
    "The measure of a leader isn't in speeches. It's in what they leave behind."
  ],
  service: [
    "Service isn't a slogan. It's a lifestyle I've lived.",
    "I don't want your vote. I want your trust. The vote will follow.",
    "In this seat, my voice won't be mine. It will be YOURS.",
    "Representing you means hearing you first, then speaking."
  ],
  listening: [
    "The most important thing in representation isn't speaking. It's hearing.",
    "I spent years as a listener on radio. Now I want to listen for you.",
    "Before I tell you where we're going, I want to know where you hurt.",
    "Your concerns aren't statistics. They're my responsibility."
  ],
  representation: [
    "Representation isn't standing in a room. It's carrying voices that aren't in the room.",
    "In that chamber, I'll be your ears, your voice, your hands.",
    "Every person in Ideato North/South should feel like they were in that room with me.",
    "I don't want to be your voice. I want to BE your voice."
  ],
  trust: [
    "Fifteen years in your homes. Not once did I give you reason to doubt.",
    "Some names you trust with your ears. I'm asking you to trust with your future.",
    "A clean name in a dirty game. That's my record.",
    "When you've been watched for 15 years and no one finds anything — that's trust."
  ],
  people: [
    "This campaign isn't about me. It's about what we can build together.",
    "The people in Ideato aren't just voters. They're my people.",
    "My village raised me. Now I want to raise my village.",
    "Not above you. Not beside you. WITH you."
  ],
  community: [
    "Community before self. That's not a slogan. That's how I live.",
    "What hurts my neighbor hurts me. That's community.",
    "We rise together. We fall together. That's Ideato.",
    "This isn't my campaign. It's our movement."
  ],
  identity: [
    "I was born in Obom Aruogu. That didn't change when the cameras came.",
    "I represent Imo because Imo made me. That's the only reason.",
    "One people. One future. One voice.",
    "I don't represent a tribe. I represent the people."
  ]
};

export const getRandomQuote = (category = null) => {
  const keys = Object.keys(quotes);
  const selectedKey = category && quotes[category] ? category : keys[Math.floor(Math.random() * keys.length)];
  const categoryQuotes = quotes[selectedKey];
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
};

export default { quotes, getRandomQuote };