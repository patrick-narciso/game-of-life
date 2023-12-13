### Structure

When accessing some application page, the **router** (In this case, the application only has `<App />` as an entry point) identifies this **page** and assembles its elements for the user.

Every **page** is made up of a set of **resources** that allow user interaction through its layouts. When the user interacts with a **layout**, an action must be triggered.

**Actions** can perform 2 types of tasks: some backend integration and making state changes.

All backend integration must be carried out by a **service**. A service can be exclusive to some functionality, or it can also be shared among several.

```
src/
├── pages/
│   ├── home.tsx
│   └── ...
├── features/
│   ├── board/
│   │   ├── components
│   │   ├── hooks (when there is a need)
│   │   ├── contexts (when there is a need)
│   │   ├── layouts
│   │   └── index.ts
│   └── ...
├── components/
│   │   ├── component-name.tsx
│   │   ├── component-name.types.ts
│   │   └── index.ts
│   └── ...
├── helpers/
│   ├── grid.ts
|   ├── grid.types.ts
│   └── ...
├── services/
│   ├── grid.ts
│   └── ...
└── ...
```

<img width="1118" alt="image" src="https://github.com/patrick-narciso/kanban-board/assets/21373134/656c5d25-22b5-47d5-a033-0618df87d3d9">


### Prerequisites

Before starting, you will need to have the following tools installed on your machine:

[Node.js](https://nodejs.org/en/).

#### 🎲 Running the application

```bash

$ npm run install
$ nom run dev

```

The frontend will be available on port 5173.

## 🛠 Technologies

The following tools were used to build the project:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://react.dev/)**
- **[Redux Toolkit](https://redux-toolkit.js.org/)**
- **[Styled Components](https://styled-components.com/)**
- **[Vite](https://vitejs.dev/)**
- **[Docker](https://www.docker.com/)**

## 🦸 Author

[![Linkedin Badge](https://img.shields.io/badge/-Patrick-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patricknarciso/)](https://www.linkedin.com/in/patricknarciso/)
[![Gmail Badge](https://img.shields.io/badge/-patrick.ncsilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:patrick.ncsilva@gmail.com)](mailto:tgmarinho@gmail.com)

---
