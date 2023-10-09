# Project Setup

## Git

- `git init`

## Node setup

- `npm init -y`

## TS

- `tsc --init` or `npx tsc --init`
- replace `tsconfig.json` contents

## ESlint / Prettier

- paste these on `scripts` on `package.json`.
- add `.vscode/settings.json`.
  ```
  "format": "prettier --write \"src/**/*.{ts,js,jsx,json}\"",
  "lint": "eslint src/**/*.*",
  ```
- add `.eslintrc.json` and `.prettierrc.json` on root

## Commitzen

- add `.czrc` on root

# Dependency

- add these deps and devDeps on `package.json`.

```
"dependencies": {
    "@theinternetfolks/context": "^1.1.0",
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "date-fns": "^2.30.0",
    "env-cmd": "^10.1.0",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "express-http-context": "^1.2.4",
    "jsonwebtoken": "^9.0.0",
    "mysql2": "^3.2.4",
    "platform-error": "^1.0.7",
    "sequelize": "^6.31.1",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^4.6.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.5.0",
    "@types/jsonwebtoken": "^9.0.2",
    "@types/node": "^20.1.0",
    "@types/swagger-jsdoc": "^6.0.1",
    "@types/swagger-ui-express": "^4.1.3",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "@typescript-eslint/parser": "^5.58.0",
    "commitizen": "^4.3.0",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8.38.0",
    "eslint-config-prettier": "^8.8.0",
    "jest": "^29.5.0",
    "nodemon": "^2.0.21",
    "prettier": "^2.8.7",
    "sequelize-auto": "^0.8.8",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5"
  }
```

- `npm i`

# Gitignore

add these text

```
.DS_Store
**/.DS_Store
**/node_modules
**/dist
/issues
```
