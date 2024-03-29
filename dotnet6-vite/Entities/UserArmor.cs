﻿namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class UserArmor
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column(TypeName = "uuid")]
    public Guid ArmorId { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Image { get; set; }
    
    public int Defense { get; set; }
    
    public int Level { get; set; }
    
    public int Heaviness { get; set; }
    
    public List<User> Users { get; set; }
}