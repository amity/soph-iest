# soph-iest -- personal website
Deployed at www.soph-iest.me.

## Building + Deployment

- Built with `yarn build`, and exported to /docs/ with `yarn export`. FYou really shouldn't be editing the /docs/ directory manually, as it's simply the static exports of the full build used for deployment.

## Tech Stack

The site is built through and through with React, using the Next.js framework for deployment. The site is built statically, and hosted through GitHub Pages. The overall structure is built for scalability -- it's already set up to be run server-side, but is being deployed statically in the meantime until that becomes desirable.

### Internationalization

The structure for the translation of the site is something I've cooked up just for this project. Though the site was originally built with i18next middleware, that setup tends to create a lot of weird Schrodinger's bugs in my experience, and it also doesn't lend itself well to static deployment.
Thus, the current build. The components take in a prop (jp) indicating which language to render in: the text, and items that should/should not appear are conveniently set up with simple ternaries using the prop as the condition. This prop is passed from the page-level, where each page is set up to an appropriate URL using the /pages/ folder, with alternate languages set up with nested pages (meaning the URL for, say, the Japanese version of the contact page is then .../contact/jp -- in my opinion, a pretty intuitive way to manage URLs for locales). The prop is current set up to simply be a boolean for optimization purposes, because at no point will I be implementing any other languages beyond the 2nd; however, it should be obvious that this could easily be switched to a short string, such as the language code, with some light refactoring.
When building a new component, just make sure you take in a prop (jp) and then render text or components conditionally on that prop. Pages should be duplicated; the page should be put under a folder with its intended name, and an "index.js" page, plus a "jp.js" page where the Layout and Component each are passed a jp={true} parameter.
If you're looking for an internationalization system for a web application of your own -- I probably wouldn't recommend this setup. The build pattern is very customized to my own specific use case -- static development and deployment, for exactly 2 languages, with 1 language preferred for all users, and components that should only render in some languages. Thus, for others using next.js and looking for an internationalisation framework, I'd probably recommend [i18next](https://www.i18next.com/) -- optimally the direct framework approach, rather than routing it with middlewar.
