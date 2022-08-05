namespace dotnet6_vite.Dto.User;

using dotnet6_vite.Entities;

public class AuthResultDto
{
    public Guid UserId { get; set; }
    public string Email { get; set; }
    public string Name { get; set; }
    public string CreatedAt { get; set; }
    public string AccessToken { get; set; }
    
    public AuthResultDto(User user, string accessToken)
    {
        UserId = user.UserId;
        Email = user.Email;
        Name = user.Name;
        CreatedAt = user.CreatedAt.ToString("yyyy-MM-dd HH:mm:ss");
        AccessToken = accessToken;
    }
}