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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasOne(u => u.Armor)
            .WithMany(a => a.Users)
            .HasForeignKey(u => u.ArmorId);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Headgear)
            .WithMany(h => h.Users)
            .HasForeignKey(u => u.HeadgearId);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Shield)
            .WithMany(s => s.Users)
            .HasForeignKey(u => u.ShieldId);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Weapon)
            .WithMany(w => w.Users)
            .HasForeignKey(u => u.WeaponId);
    }

    public DbSet<Example> Examples { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Armor> Armors { get; set; }
    public DbSet<Weapon> Weapons { get; set; }
    public DbSet<Headgear> Headgears { get; set; }
    public DbSet<Shield> Shields { get; set; }
    public DbSet<UserWeapon> UserWeapons { get; set; }
    public DbSet<UserHeadgear> UserHeadgears { get; set; }
    public DbSet<UserShield> UserShields { get; set; }
    public DbSet<UserArmor> UserArmors { get; set; }
}