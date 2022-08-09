export const getRoleImage = (role: number) => {
  switch (role) {
    case 0:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Farcher.png?alt=media";
    case 1:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media";
    case 2:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fknight.png?alt=media";
    case 3:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fmonk.png?alt=media";
    case 4:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwizard.png?alt=media";
    case 5:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fninja.png?alt=media";
    case 6:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fskerio.png?alt=media";
    case 7:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fthief.png?alt=media";
    default:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media";
  }
};

export const getLevelImage = (level: number) => {
  switch (level) {
    case 1:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel1.png?alt=media";
    case 2:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel2.png?alt=media";
    case 3:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel3.png?alt=media";
    case 4:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel4.png?alt=media";
    case 5:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel5.png?alt=media";
    default:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Fitem-level%2Flevel1.png?alt=media";
  }
};
