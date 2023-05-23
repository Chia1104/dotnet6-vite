namespace dotnet6_vite.Entities;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class Example
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column(TypeName = "uuid")]
    public Guid id { get; set; }
    
    public string name { get; set; }
    
    public string email { get; set; }
    
    [JsonIgnore]
    public string password { get; set; }
    
    [JsonIgnore]
    public string? remember_token { get; set; }
    
    [Column(TypeName = "timestamp")]
    public DateTime created_at { get; set; }
} 