#  Dotnet 6 and React with Vite Practice

This is a practice project for [.Net Core](https://dotnet.microsoft.com/) and [React](https://reactjs.org/).

🚧 Work in progress 🚧

## Language and Tools

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts,cs,vite,react,dotnet,postgres" />
</div>

## Get Started

Install dependencies

```bash
# dotnet
$ cd dotnet6-vite
$ dotnet restore

# vite
$ cd dotnet6-vite\client
$ pnpm install 
```

Generate the appsettings.Development.json file and add your DB connection string

```bash
$ cp appsettings.Example.json appsettings.Development.json
```

Run the app

```bash
$ dotnet run
```