namespace dotnet6_vite.Dto;

using System.ComponentModel.DataAnnotations;

public class NewExample
{
    [Required]
    [StringLength(100)]
    public string name { get; set; }
    
    [Required]
    [EmailAddress]
    public string email { get; set; }
    
    [Required]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
    [DataType(DataType.Password)]
    public string password { get; set; }
}