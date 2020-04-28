import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();

export default {
  masterPostList : {
  [id1]: {
    subject: "goat sale",
    content: "you hear me",
    username: "goatFan23",
    image: "goats",
    brownies: 5,
    timestamp: Date.now(),
    id: id1,
    key: id1
  },
  [id2]: {
    subject: "will draw anime profile pics",
    content: "200$",
    username: "mrPopo1",
    image: "anime",
    brownies: -4,
    timestamp: Date.now(),
    id: id2,
    key: id2
  },
  [id3]: {
    subject: "black and white photos of attractive people",
    content: "beeop boop",
    username: "zeddead",
    image: "monochrome girls",
    brownies: 0,
    timestamp: Date.now(),
    id: id3,
    key: id3
  }
  }
}