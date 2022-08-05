namespace dotnet6_vite.Dto.Headgear;

using System.ComponentModel.DataAnnotations;

public class NewHeadgearDto
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
}