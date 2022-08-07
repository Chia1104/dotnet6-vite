using System.ComponentModel.DataAnnotations;

namespace dotnet6_vite.Dto.User;

public class UserUpdateArmorDto
{
    [Required]
    public string Token { get; set; }
    
    [Required]
    public Guid ArmorId { get; set; }
}