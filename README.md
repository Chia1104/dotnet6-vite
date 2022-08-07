#  Dotnet 6 and React with Vite Practice

This is a practice project for [.Net Core](https://dotnet.microsoft.com/) and [React](https://reactjs.org/).

🚧 Work in progress 🚧

## Language and Tools

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts,cs,vite,react,dotnet,postgres" />
</div>

## Features

 - [x] React with Vite
 - [x] Authentication([JWT](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer/7.0.0-preview.6.22330.3))
 - [ ] Dockerized

## Get Started

Install dependencies

```bash
# dotnet
$ cd dotnet6-vite
$ dotnet restore

# vite
$ cd dotnet6-vite\Client
$ pnpm install 
```

Generate the appsettings.Development.json file and add your DB connection string.

```bash
$ cd dotnet6-vite
$ cp appsettings.Example.json appsettings.Development.json
```

The .NET Entity Framework Core tools (dotnet ef) are used to generate EF Core migrations, to install the EF Core tools globally.

```bash
$ dotnet tool install -g dotnet-ef
```

Run the following command from the project root folder to install the EF Core design package, it provides cross-platform command line tooling support and is used to generate EF Core migrations.

```bash
$ cd dotnet6-vite
$ dotnet ef migrations add InitialCreate
$ dotnet ef database update
```

Generate https certificate before running the app.

```bash
$ cd dotnet6-vite\Client
$ pnpm prestart
```

Run the app.

```bash
$ cd dotnet6-vite
$ dotnet run watch
```