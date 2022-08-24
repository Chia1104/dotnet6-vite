export const getRoleImage = (role: number | string | undefined) => {
  switch (role) {
    case "Archer":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Farcher.png?alt=media";
    case 0:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Farcher.png?alt=media";
    case "Warrior":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media";
    case 1:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media";
    case "Knight":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fknight.png?alt=media";
    case 2:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fknight.png?alt=media";
    case "Monk":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fmonk.png?alt=media";
    case 3:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fmonk.png?alt=media";
    case "Wizard":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwizard.png?alt=media";
    case 4:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwizard.png?alt=media";
    case "Ninja":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fninja.png?alt=media";
    case 5:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fninja.png?alt=media";
    case "Sekiro":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fskerio.png?alt=media";
    case 6:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fskerio.png?alt=media";
    case "Thief":
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fthief.png?alt=media";
    case 7:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fthief.png?alt=media";
    default:
      return "https://firebasestorage.googleapis.com/v0/b/dotnet6-vite-mmorpg.appspot.com/o/images%2Froles%2Fwarrior.png?alt=media";
  }
};

export const getLevelImage = (level: number | undefined) => {
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

export const getItemColor = (item: number) => {
  if (item <= 25) return "#f44336";
  if (item <= 50) return "#ff9800";
  if (item <= 75) return "#2196f3";
  if (item <= 100) return "#4caf50";
  return "#2196f3";
};

export const getHeavinessColor = (item: number) => {
  if (item <= 25) return "#4caf50";
  if (item <= 50) return "#2196f3";
  if (item <= 75) return "#ff9800";
  if (item <= 100) return "#f44336";
  return "#2196f3";
};
