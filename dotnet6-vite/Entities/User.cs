namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class User
{
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
    
    [Column(TypeName = "uuid")]
    public Guid? ArmorId { get; set; }
    public UserArmor? Armor { get; set; }
    
    [Column(TypeName = "uuid")]
    public Guid? HeadgearId { get; set; }
    public UserHeadgear? Headgear { get; set; }
    
    [Column(TypeName = "uuid")]
    public Guid? ShieldId { get; set; }
    public UserShield? Shield { get; set; }
    
    [Column(TypeName = "uuid")]
    public Guid? WeaponId { get; set; }
    public UserWeapon? Weapon { get; set; }
}