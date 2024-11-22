# Nest Playground

## Glossary of NestJS

- **SWC (Speedy Web Compiler)** is an extensible Rust-based platform that can be used for both compilation and bundling. Using SWC with Nest CLI is a great and simple way to significantly speed up your development process.
- **Monorepo** refers to a single repository that contains all the code for multiple projects.
- **Polyrepo** means using multiple separate repositories, with each project having its own repository.

## Structure Folder Inspiration from SOLID Principles

├── src  
│   ├── app  
│   │   ├── modules  
│   │   │   ├── transaction  
│   │   │   │   ├── controllers  
│   │   │   │   ├── dto  
│   │   │   │   ├── entities  
│   │   │   │   ├── services  
│   │   │   │   ├── tests  
│   │   │   │   └── users.module.ts  
│   │   │   └── tasks  
│   │   │       ├── controllers  
│   │   │       ├── dto  
│   │   │       ├── entities  
│   │   │       ├── services  
│   │   │       ├── tests  
│   │   │       └── tasks.module.ts  
│   │   └── app.module.ts  
│   ├── config  
│   ├── database  
│   ├── shared  
│   ├── core  
│   │   ├── exceptions  
│   │   ├── filters  
│   │   ├── guards  
│   │   ├── interfaces  
│   │   ├── middlewares  
│   │   ├── pipes  
│   │   ├── providers  
│   │   ├── utils  
│   │   └── core.module.ts  
│   └── main.ts  

### Reference

- [monorepo vs polyrepo](https://dev.to/bitdev_/monorepo-vs-polyrepo-j9) - dev.to
- [best practices for building scalable nestjs application](https://www.jiitak.com/blog/best-practices-for-building-scalable-nestjs-applications#section-0) - jiitak.com
