# Photo Library App

[![Angular](https://img.shields.io/badge/Angular-20.3-red?style=flat&logo=angular&logoColor=white)](https://angular.io/) 
[![Angular Material](https://img.shields.io/badge/Angular%20Material-20.2-blue?style=flat&logo=angular&logoColor=white)](https://material.angular.io/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 

An **Angular Photo Library project** for viewing amazing random images and choosing your favorites.  
The application provides functionality to view random beautiful images and set as many as you want as favorites. You can remove images from favorites at any time.

The random images are being retrieved from the following:

[![Images Generation](https://picsum.photos/500/600)](https://picsum.photos/500/600) 

---

## 🚀 Features

The app simulates a **virtual Kanban board**, where each task has a status and can be moved between different levels.  
Key features include:

✅ View infinite random images   
:heart: Set images as favorites  
🗑️ Verification and remove from favorites

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

```bash
Create the appropriate environments folder and inside there, the environment files.
```

Run the app:

```bash
ng serve
```

## 👨‍💻 Author

Developed by **Kostoudas Savvas**.
Feel free to connect or open issues in this repository.
