import type { PageServerLoad } from "./$types";
import fs from "fs";
import fm from "front-matter";
import path from "path";
import type { Text, Film, Painting } from "$lib/types";

const textDir = path.join(process.cwd(), "src", "lib", "posts", "text");
const paintingDir = path.join(process.cwd(), "src", "lib", "posts", "painting");
const filmDir = path.join(process.cwd(), "src", "lib", "posts", "film");
const exhibitionDir = path.join(process.cwd(), "src", "lib", "posts", "exhibitions");

export const load: PageServerLoad = async () => {
  const texts = fs
    .readdirSync(textDir)
    .map((file) => {
      const post = fm<Text>(
        fs.readFileSync(path.join(textDir, file), "utf-8")
      );
      return {
        slug: post.attributes.slug,
        title: post.attributes.title,
        author: post.attributes.author,
        body: post.body,
        description: post.attributes.description,
        date: post.attributes.date,
        illustration: post.attributes.illustration,
        type: post.attributes.category,
        url: post.attributes.url
      };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const paintings = fs
    .readdirSync(paintingDir)
    .map((file) => {
      const post = fm<Painting>(
        fs.readFileSync(path.join(paintingDir, file), "utf-8")
      );
      return {
        slug: post.attributes.slug.replace(/-/g, " "),
        title: post.attributes.title,
        order: post.attributes.order,
      };
    }).sort((a, b) => a.order - b.order);

  const films = fs
    .readdirSync(filmDir)
    .map((file) => {
      const film = fm<Film>(
        fs.readFileSync(path.join(filmDir, file), "utf-8")
      );
      return {
        slug: film.attributes.slug,
        title: film.attributes.title,
        link: film.attributes.link
      };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 

    const exhibitions = fs
      .readdirSync(exhibitionDir)
      .map((file) => {
        const exhibition = fm<Painting>(
          fs.readFileSync(path.join(exhibitionDir, file), "utf-8")
        );
        return {
          slug: exhibition.attributes.slug,
          title: exhibition.attributes.title,
          link: exhibition.attributes.link
        };
      }
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    

    return {
      body: {
        texts,
        paintings,
        films,
        exhibitions
      }
    };
};