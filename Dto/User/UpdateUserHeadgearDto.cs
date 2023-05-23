namespace dotnet6_vite.Dto.User;

using System.ComponentModel.DataAnnotations;

public class UpdateUserHeadgearDto
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
    [Range(1, 5)]
    public int Level { get; set; }
    
    [Required]
    [Range(1, 100)]
    public int Heaviness { get; set; }
    
    public UpdateUserHeadgearDto(string name, string description, string image, int defense, int level, int heaviness)
    {
        Name = name;
        Description = description;
        Image = image;
        Defense = defense;
        Level = level;
        Heaviness = heaviness;
    }
}