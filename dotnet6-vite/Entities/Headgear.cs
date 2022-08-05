namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Headgear
{
    public Headgear()
    {
        this.Users = new HashSet<User>();
    }
    
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column(TypeName = "uuid")]
    public Guid HeadgearId { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
    public int Defense { get; set; }
    
    public int Level { get; set; }
    
    public int Heaviness { get; set; }
    
    public ICollection<User> Users { get; set; }
}