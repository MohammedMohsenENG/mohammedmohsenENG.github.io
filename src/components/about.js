import { Space } from "./functions.js";
import { content } from "./../../db/content.js";

export const About = () => {
  return `
  <h2 class="heading-secondary">about me</h2>
    <div class="container">
  
      <div class="right-side">
        <div class="img">
        <img src="${content.pictures.aboutPic1.url}" alt="${content.pictures.aboutPic1.alt}" />
        </div>
        <div class="img">
        <img src="${content.pictures.aboutPic2.url}" alt="${content.pictures.aboutPic2.alt}" />
        </div>
      </div>
    <div class="left-side">
        <h3 class="small-heading">who am i ?</h3>
        <div class="text-container">
        <p>${Space()} ${content.about.paragraphs[0]}</p>
        <p>${Space()}${content.about.paragraphs[1]}</p>
        </div>
      </div>
    </div>
    `;
};
