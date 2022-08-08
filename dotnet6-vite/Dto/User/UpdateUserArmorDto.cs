using System.ComponentModel.DataAnnotations;

namespace dotnet6_vite.Dto.User;

public class UpdateUserArmorDto
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
    public UpdateUserArmorDto(string name, string description, string image, int defense, int heaviness, int level)
    {
        Name = name;
        Description = description;
        Image = image;
        Defense = defense;
        Heaviness = heaviness;
        Level = level;
    }
}