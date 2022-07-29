namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;

public class Example
{
    [Key]
    public int Id { get; set; }
    
    [Required, StringLength(50)]
    public string Name { get; set; }
    
    [Required]
    public int Age { get; set; }
}