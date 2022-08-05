namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class User
{
    public User()
    {
        this.Armors = new HashSet<Armor>();
        this.Weapons = new HashSet<Weapon>();
        this.Headgears = new HashSet<Headgear>();
        this.Shields = new HashSet<Shield>();
    }
    
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column(TypeName = "uuid")]
    public Guid UserId { get; set; }
    
    public string Name { get; set; }
    
    public string Email { get; set; }
    
    [JsonIgnore]
    public string Password { get; set; }
    
    [JsonIgnore]
    public string? RememberToken { get; set; }
    
    [Column(TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }
    
    public Role Role { get; set; }
    
    public bool IsActive { get; set; }
    
    public ICollection<Armor> Armors { get; set; }
    
    public ICollection<Headgear> Headgears { get; set; }
    
    public ICollection<Shield> Shields { get; set; }
    
    public ICollection<Weapon> Weapons { get; set; }
}