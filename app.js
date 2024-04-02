import { sectwoDiv } from "./card.js"
import { rightDiv } from "./image.js"
import { leftDiv } from "./info.js"

const dataOne = {
    title:      "LOREM",
    para:       "“A girl gamer describes a female who regularly engages in the playing of video games, role-playing games, or other games (colloquially referred to as gaming). This can be from the most casual interest to the most serious professional gaming.”",
    button:     "Contact me",
    image:      "sl.png"
}

const dataTwo = {
    title2:     "GIRL GAMER",

    image1:     "(4).jpg",
    para1:      "For people who associate the term gamer girl with the negative “fake” stereotype, the alternative girl gamer is a way to emphasize the gamer part of their identity.",
    button1:    "View",

    image2:     "(5).webp",
    para2:      "For people who associate the term gamer girl with the negative “fake” stereotype, the alternative girl gamer is a way to emphasize the gamer part of their identity.",
    button2:    "View",

    image3:     "(6).jpg",
    para3:      "For people who associate the term gamer girl with the negative “fake” stereotype, the alternative girl gamer is a way to emphasize the gamer part of their identity. ",
    button3:    "View"
}

const {title, para, button, image} = dataOne
const {title2, image1, image2, image3, para1, para2, para3, button1, button2, button3} = dataTwo

sectionOne.append(leftDiv(title, para, button))
sectionOne.append(rightDiv(image))
sectionTwo.append(sectwoDiv(title2, image1, image2, image3, para1, para2, para3, button1, button2, button3))
