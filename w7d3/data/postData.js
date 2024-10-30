export const forumPost = {
  authorId: "5", // Author ID between 1 and 6
  id: "3", // Unique post ID
  title: "Coffee Recommendations",
  question:
    "I'm a coffee enthusiast, and I'm always looking for new coffee experiences. Can you recommend any unique coffee shops or hidden gems in our city? I appreciate your suggestions!",
  likes: 0, // Always 0 likes
  replies: [
    {
      id: "1", // Unique reply ID
      authorId: "2", // Author ID between 1 and 6
      content:
        "You should check out Brew Haven on 5th Avenue. They have a great selection of artisanal coffees!",
      likes: 0, // Always 0 likes
    },
    {
      id: "2", // Unique reply ID
      authorId: "4", // Author ID between 1 and 6
      content:
        "Cafe L'Amour in the old town district is a cozy spot with a unique atmosphere. You'll love it!",
      likes: 0, // Always 0 likes
    },
    {
      id: "3", // Unique reply ID
      authorId: "1", // Author ID between 1 and 6
      content:
        "Have you tried Java Jolt in the uptown area? They offer exotic beans from around the world!",
      likes: 0, // Always 0 likes
    },
    {
      id: "4", // Unique reply ID
      authorId: "6", // Author ID between 1 and 6
      content:
        "I recommend The Coffee Treehouse in the botanical gardens. It's a hidden gem with a serene atmosphere.",
      likes: 0, // Always 0 likes
    },
    {
      id: "5", // Unique reply ID
      authorId: "3", // Author ID between 1 and 6
      content:
        "If you're looking for something different, The Grind & Co. offers coffee-infused cocktails in the evenings. It's a unique experience!",
      likes: 0, // Always 0 likes
    },
  ],
};
