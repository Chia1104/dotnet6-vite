namespace dotnet6_vite.Dto.Weapon;

using System.ComponentModel.DataAnnotations;
using dotnet6_vite.Entities;

public class NewWeaponDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [Required]
    [StringLength(500)]
    public string Description { get; set; }
    
    [Required]
    public string Image { get; set; }
    
    [Required]
    [Range(1, 100)]
    public int Defense { get; set; }
    
    [Required]
    [Range(1, 100)]
    public int Heaviness { get; set; }
    
    [Required]
    [Range(1, 5)]
    public int Level { get; set; }
    
    [Required]
    [Range(1, 100)]
    public int Attack { get; set; }
    
    [Required]
    [EnumDataType(typeof(WeaponCategory))]
    public string Category { get; set; }
}