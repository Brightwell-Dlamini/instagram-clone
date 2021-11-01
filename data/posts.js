import users from "./users";
export const POSTS = [
  {
    imageUrl:
      "https://images2.minutemediacdn.com/image/upload/c_crop,w_3071,h_1727,x_1159,y_239/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01fjkjw675m9wfbqqk2v.jpg",
    user: users[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts.😁📱",
    profile_picture: users[0].image,
    comments: [
      {
        user: "Gervinho",
        element: "Wow! This build looks fire. Super excited about it.",
      },
      {
        user: "Luvuno",
        element: "Once I wake up, I'll finally to be ready to code this up",
      },
    ],
  },
  {
    imageUrl:
      "https://www.thesun.co.uk/wp-content/uploads/2021/10/NINTCHDBPICT000690329045.jpg",
    user: users[1].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts.😁📱",
    profile_picture: users[1].image,
    comments: [
      {
        user: "Gervinho",
        element: "Wow! This build looks fire. Super excited about it.",
      },
      {
        user: "Luvuno",
        element: "Once I wake up, I'll finally to be ready to code this up",
      },
    ],
  },
];
