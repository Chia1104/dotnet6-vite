using System.Globalization;

namespace dotnet6_vite.Dto.User;

using dotnet6_vite.Entities;
using System;

public class AuthResultDto
{
    public string UserId { get; set; }
    public string Email { get; set; }
    public string Name { get; set; }
    public string AccessToken { get; set; }
    
    public AuthResultDto(User user, string accessToken)
    {
        UserId = user.UserId.ToString();
        Email = user.Email;
        Name = user.Name;
        AccessToken = accessToken;
    }
}