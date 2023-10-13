import type { PageServerLoad } from './$types';
import fs from 'fs';
import fm from 'front-matter';
import path from 'path';
import type { Film, Text, Paintings } from '$lib/types';

const postsDir = path.join(process.cwd(), 'src', 'lib', 'posts');

export const load: PageServerLoad = async ({ params }) => {
  // if file is in text, process as text
  // if file is in painting, process as painting
  // if file is in film, process as film
  // Start by detecting which directory the file is in
  const textDir = path.join(process.cwd(), 'src', 'lib', 'posts', 'text');
  const paintingDir = path.join(process.cwd(), 'src', 'lib', 'posts', 'painting');
  const filmDir = path.join(process.cwd(), 'src', 'lib', 'posts', 'film');
  const exhibitionDir = path.join(process.cwd(), 'src', 'lib', 'posts', 'exhibitions');

  const textFiles = fs.readdirSync(textDir);
  const paintingFiles = fs.readdirSync(paintingDir);
  const filmFiles = fs.readdirSync(filmDir);
  const exhibitionFiles = fs.readdirSync(exhibitionDir);

  if (textFiles.includes(params.slug + '.md')) {
    const post = fm<Text>(
      fs.readFileSync(path.join(textDir, params.slug + '.md'), 'utf-8')
    );
    return {
      body: {
        title: post.attributes.title,
        body: post.body,
        date: post.attributes.date,
        type: 'text'
      }
    };
  }

  if (paintingFiles.includes(params.slug + '.md')) {
    const post = fm<Paintings>(
      fs.readFileSync(path.join(paintingDir, params.slug + '.md'), 'utf-8')
    );
    return {
      body: {
        title: post.attributes.title,
        body: post.body,
        date: post.attributes.date,
        works: post.attributes.works,
        type: 'painting'
      }
    };
  }

  if (exhibitionFiles.includes(params.slug + '.md')) {
    const post = fm<Paintings>(
      fs.readFileSync(path.join(exhibitionDir, params.slug + '.md'), 'utf-8')
    );
    return {
      body: {
        title: post.attributes.title,
        body: post.body,
        date: post.attributes.date,
        works: post.attributes.works,
        type: 'painting'
      }
    };
  }

  if (filmFiles.includes(params.slug + '.md')) {
    const post = fm<Film>(
      fs.readFileSync(path.join(filmDir, params.slug + '.md'), 'utf-8')
    );
    return {
      body: {
        title: post.attributes.title,
        body: post.body,
        date: post.attributes.date,
        type: 'film'
      }
    };
  }
};