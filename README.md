# Photo Library App

An **Angular Photo Library project** for viewing amazing random images and choosing your favorites.  
The application provides functionality to view random beautiful images and set as many as you want as favorites. You can remove images from favorites at any time.

The random images are being retrieved from the following:

[![Images Generation](https://picsum.photos/500/600)](https://picsum.photos/500/600) 

---

## 🚀 Features

The app simulates a **photo gallery**, where users can view beautiful random images and set them as favorite.  
Key features include:

1. :heavy_check_mark: View infinite random images
2. :heart: Set images as favorites
3. :camera: Preview selected favorite image
4. 🗑️ Verification and remove image from favorites

---

## 🧩 Tech Stack

- Angular 21
- TypeScript
- Angular Material
- Language translations (greek (el), english (en)). ngx-translate
---

## 🔑 Environment Setup

The Angular project uses **environment files** for configuration:
- `src/environments/environment.ts` → for development
- `src/environments/environment.prod.ts` → for production

Example `environment.ts`:

```ts
export const environment = {
  production: false,
  serverIP: 'https://picsum.photos/500/600',
  tracelog: false
};

```
---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/savkost/photo-gallery.git
cd photo-gallery
```

Install dependencies:

```bash
npm install
```

> [!IMPORTANT]
> After npm install, create the environments folder at src folder, and in there create the environment files as described at the section above.

Run the app:

```bash
ng serve
```
