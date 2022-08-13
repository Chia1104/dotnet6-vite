FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/* 

WORKDIR /src
COPY ["dotnet6-vite/dotnet6-vite.csproj", "dotnet6-vite/"]
RUN dotnet restore "dotnet6-vite/dotnet6-vite.csproj"
COPY . .
WORKDIR "/src/dotnet6-vite"
RUN dotnet build "dotnet6-vite.csproj" -c release -o /app/build

FROM build AS publish
RUN dotnet publish "dotnet6-vite.csproj" -c release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "dotnet6-vite.dll"]