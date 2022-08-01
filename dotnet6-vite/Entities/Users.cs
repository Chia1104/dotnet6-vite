namespace dotnet6_vite.Entities;

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

public class Users
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column(TypeName = "uuid")]
    public string id { get; set; }
    
    public string name { get; set; }
    
    public string email { get; set; }
    
    public string password { get; set; }
    
    public string? remember_token { get; set; }
    
    [Column(TypeName = "datetime")]
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime created_at { get; set; }
}