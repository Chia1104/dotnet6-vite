#  Dotnet 6 and React with Vite Practice

This is a practice project for [.Net Core](https://dotnet.microsoft.com/) and [React](https://reactjs.org/).

A simple game that player can equip items and see their stats.

### Deployments

-   [Railway](https://dotnet6-vite-production.up.railway.app/)

## Language and Tools

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts,cs,vite,react,dotnet,postgres,docker" />
</div>

## Features

 - [x] React with Vite
 - [x] Authentication([JWT](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer/7.0.0-preview.6.22330.3))
 - [x] Dockerized

## Get Started

Install dependencies

```bash
# server
$ cd dotnet6-vite
$ dotnet restore

# client
$ cd dotnet6-vite\Client
$ pnpm install 
```

Generate the `.env` file and add your DB connection string.

```bash
# server
$ cd dotnet6-vite
$ cp .env.example .env
```

The .NET Entity Framework Core tools (dotnet ef) are used to generate EF Core migrations, to install the EF Core tools globally.

```bash
$ dotnet tool install -g dotnet-ef
```

Run the following command from the project root folder to install the EF Core design package, it provides cross-platform command line tooling support and is used to generate EF Core migrations.

```bash
# server
$ cd dotnet6-vite
$ dotnet ef migrations add InitialCreate
$ dotnet ef database update
```

Generate https certificate before running the app.

```bash
# client
$ cd dotnet6-vite\Client
$ pnpm prestart
```

Run the app.

```bash
# server
$ cd dotnet6-vite
$ dotnet run watch
```

Build the docker image in the root of the project folder

```bash
$ docker build -t app:test .
```