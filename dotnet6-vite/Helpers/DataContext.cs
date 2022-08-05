namespace dotnet6_vite.Helpers;

using Microsoft.EntityFrameworkCore;
using dotnet6_vite.Entities;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
    }
    
    public DbSet<Example> Examples { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Armor> Armors { get; set; }
    public DbSet<Weapon> Weapons { get; set; }
    public DbSet<Headgear> Headgears { get; set; }
    public DbSet<Shield> Shields { get; set; }
}