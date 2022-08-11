namespace dotnet6_vite.Dto.User;

using dotnet6_vite.Entities;
using System.ComponentModel.DataAnnotations;

public class AuthResultDto
{
    public string UserId { get; set; }
    public string Email { get; set; }
    public string Name { get; set; }
    
    [EnumDataType(typeof(Role))]
    public string Role { get; set; }
    public string AccessToken { get; set; }
    
    public AuthResultDto(User user, string accessToken)
    {
        UserId = user.UserId.ToString();
        Email = user.Email;
        Name = user.Name;
        Role = user.Role.ToString();
        AccessToken = accessToken;
    }
}