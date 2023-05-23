namespace dotnet6_vite.Dto.Example;

using System.ComponentModel.DataAnnotations;

public class UpdateExample
{
    [StringLength(100)]
    public string? name { get; set; }
    
    [EmailAddress]
    public string? email { get; set; }
}