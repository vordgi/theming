# Theming
Demo for the second part of articles on theming - [habr]()

## About

There are 3 types of rendering in this repository

- SPA in react - https://github.com/vordgi/theming/tree/main/spa

- SSR in next.js - https://github.com/vordgi/theming/tree/main/ssg

- SSG in next.js - https://github.com/vordgi/theming/tree/main/ssr

Each variant can be runned with the default dark or light mode.

## Preparation for local testings

Clone repository

```bash
git clone https://github.com/vordgi/theming.git
cd theming
```

Install workspaces dependencies:

```bash
yarn install
```

## SPA

### Light mode

https://theming-spa.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env REACT_APP_THEME=light yarn dev:spa
```

Production mode
```bash
cross-env REACT_APP_THEME=light yarn build:spa
serve -s spa/build
```

### Dark mode

https://theming-spa-dark.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env REACT_APP_THEME=dark yarn dev:spa
```

Production mode
```bash
cross-env REACT_APP_THEME=dark yarn build:spa
serve -s spa/build
```


## SSG

### Light mode

https://theming-ssg.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env NEXT_PUBLIC_THEME=light yarn dev:ssg
```

Production mode
```bash
cross-env NEXT_PUBLIC_THEME=light yarn build:ssg
yarn start:ssg
```

### Dark mode

https://theming-ssg-dark.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env NEXT_PUBLIC_THEME=dark yarn dev:ssg
```

Production mode
```bash
cross-env NEXT_PUBLIC_THEME=dark yarn build:ssg
yarn start:ssg
```


## SSR

### Light mode

https://theming-ssr.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env NEXT_PUBLIC_THEME=light yarn dev:ssr
```

Production mode
```bash
cross-env NEXT_PUBLIC_THEME=light yarn build:ssr
cross-env NEXT_PUBLIC_THEME=light yarn start:ssr
```

### Dark mode

https://theming-ssr-dark.vorfolio.ru/

**Test locally**

Development mode
```bash
cross-env NEXT_PUBLIC_THEME=dark yarn dev:ssr
```

Production mode
```bash
cross-env NEXT_PUBLIC_THEME=dark yarn build:ssr
cross-env NEXT_PUBLIC_THEME=dark yarn start:ssr
```