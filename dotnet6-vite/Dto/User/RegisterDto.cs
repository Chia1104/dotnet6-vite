﻿namespace dotnet6_vite.Dto.User;

using System.ComponentModel.DataAnnotations;
using dotnet6_vite.Entities;

public class RegisterDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; }
    
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    
    public DateTime CreatedAt
    {
        get => DateTime.Now;
        set => value = DateTime.Now;
    }
    
    [Required]
    [EnumDataType(typeof(Role))]
    public string Role { get; set; }

    public bool IsActive
    {
        get => true;
        set => value = true;
    }
}